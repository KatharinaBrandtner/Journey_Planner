// Autor: Katharina Brandtner
// register page

"use client"

import React,{useState}from"react"
import axios from"axios"
import Navbar from'@components/navbar'
import Footer from'@components/footer'
import Heading from'@components/heading'
import Btn from'@components/button'
import styles from'../page.module.css'

export default function RegisterPage(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const[error,setError]=useState("")
    const[success,setSuccess]=useState("")

    const handleSubmit=async(e:React.FormEvent)=>{
        e.preventDefault()
        setError("")
        setSuccess("")

        try{
            await axios.post("http://localhost:8000/api/auth/register",{email,password})
            setSuccess("Registrierung erfolgreich! Sie können sich jetzt einloggen.")
        }catch(error:any){
            setError(error.response?.data?.message||"Fehler bei der Registrierung!")
        }
    }

    return(
        <>
            <Navbar active="register"/>
            <div className={`container mb-5 mt-5 pt-5 ${styles.containerLogin}`}>
                <div className="row">
                    <div className="col-sm-6">
                        <img src="images/login.jpg" className="img-fluid" alt="wine"/>
                    </div>
                    <div className="col-sm-6">
                        <Heading text="Create" variant="light"/>
                        <Heading text="Account" variant="light"/>
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
                            {success&&<div className="alert alert-success">{success}</div>}
                            <Btn text="Create account" variant="btn-dark" type="submit"/>
                            <br/><br/>
                            <p className={`${styles.smallgrey}`}>Already have an account?<a href="/login"><span className={`${styles.orange} ${styles.abstandrechts}`}>Login</span></a></p>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
