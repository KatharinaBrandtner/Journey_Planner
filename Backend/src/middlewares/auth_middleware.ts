// Autor: Katharina Brandtner
//login/register middleware


import{Request,Response,NextFunction}from"express"
import jwt from"jsonwebtoken"

export const verifyToken=(req:Request,res:Response,next:NextFunction):void=>{
    let token:string|undefined

    if(req.headers.authorization&&req.headers.authorization.startsWith("Bearer")){
        token=req.headers.authorization.split(" ")[1]
    }else{
        console.error("Kein Token gefunden im Header!")
        res.status(401).json({message:"Access Denied! No Token Provided."})
        return
    }

    console.log("Token:",token)

    try{
        const decoded=jwt.decode(token)
        console.log("Decoded Token:",decoded)

        const verified=jwt.verify(token,process.env.TOKEN_SECRET||"tokentest")
        req.body.user=verified
        next()
    }catch(error){
        console.error("Fehler bei der Token-Überprüfung:",error)
        res.status(400).json({message:"Invalid Token!"})
        return
    }
}


