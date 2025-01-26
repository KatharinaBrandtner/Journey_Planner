// Autor: Katharina Brandtner
//  login/registreiren

import{Request,Response}from"express"
import{createUser,signInUser}from"../services/auth_service"

export const registerUser=async(req:Request,res:Response)=>{
    try{
        const{email,password}=req.body
        const user=await createUser(email,password)
        res.status(201).json(user)
    }catch(error){
        if(error instanceof Error){
            res.status(400).json({message:error.message})
        }else{
            res.status(400).json({message:"An unknown error occurred."})
        }
    }
}

export const loginUser=async(req:Request,res:Response)=>{
    try{
        const{email,password}=req.body
        const token=await signInUser(email,password)
        res.status(200).json({token})
    }catch(error){
        if(error instanceof Error){
            res.status(400).json({message:error.message})
        }else{
            res.status(400).json({message:"An unknown error occurred."})
        }
    }
}
