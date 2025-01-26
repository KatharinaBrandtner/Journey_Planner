import axios from"axios"

const axiosInstance=axios.create({
    baseURL:"http://localhost:8000/api" //Basis-URL des Backends
})

axiosInstance.interceptors.request.use(config=>{
    const token=localStorage.getItem("authToken")
    console.log("Token aus localStorage:",token) //Debug: Zeigt, ob der Token korrekt abgerufen wird
    if(token){
        config.headers.Authorization=`Bearer ${token}`
    }else{
        console.error("Kein Token im localStorage gefunden!")
    }
    return config
})

export default axiosInstance
