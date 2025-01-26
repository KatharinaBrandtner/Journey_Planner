// Autor: Katharina Brandtner
// Login page

"use client"

import React,{useState}from"react"
import{useRouter}from"next/navigation"
import axios from"axios"
import Navbar from'@components/navbar'
import Footer from'@components/footer'
import Heading from'@components/heading'
import Btn from'@components/button'
import styles from'../page.module.css'

export default function LoginPage(){
    const router=useRouter()
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault()
        setError("")

        try{
            const response=await axios.post("http://localhost:8000/api/auth/login",{email,password})

            const token=response.data.token
            console.log("Erhaltener Token:",token)

            if(typeof window!=="undefined"){
                localStorage.setItem("authToken",token)
            }

            alert("Erfolgreich eingeloggt!")
        }catch(error){
            console.error("Login-Fehler:",error)
            alert("Fehler beim Einloggen!")
        }
    }

    return(
        <>
            <Navbar active="login"/>
            <div className={`container mb-5 mt-5 pt-5 ${styles.containerLogin}`}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src="images/login.jpg" className="img-fluid" alt="wine"/>
                    </div>
                    <div className="col-sm-6">
                        <Heading text="Login" variant="light"/>
                        <br/><br/>
                        <form onSubmit={handleSubmit}>
                            <div className={`input-group mb-3 ${styles.inputgroupCustom}`}>
                                <span className={`input-group-text ${styles.inputgrouptextCustom}`}>E-Mail<span className={`${styles.orange} ${styles.abstandrechts}`}>*</span></span>
                                <input type="email" className={`form-control ${styles.formcontrolCustom}`} id="username" name="username" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                            </div>
                            <br/>
                            <div className={`input-group mb-3 ${styles.inputgroupCustom}`}>
                                <span className={`input-group-text ${styles.inputgrouptextCustom}`}>Password<span className={`${styles.orange} ${styles.abstandrechts}`}>*</span></span>
                                <input type="text" className={`form-control ${styles.formcontrolCustom}`} id="password" name="password" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                            </div>
                            <br/><br/>
                            {error&&<div className="alert alert-danger">{error}</div>}
                            <Btn text="Login" variant="btn-dark" type="submit"/>
                            <br/><br/>
                            <p className={`${styles.smallgrey}`}>New User?<a href="/register"><span className={`${styles.orange} ${styles.abstandrechts}`}>Sign up</span></a></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
