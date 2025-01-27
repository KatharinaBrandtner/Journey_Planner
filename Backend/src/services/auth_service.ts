// Autor: Katharina Brandtner
// create user und login

import jwt from"jsonwebtoken"
import bcrypt from"bcryptjs"
import User from"../models/user_model"

export const createUser=async(email:string,password:string)=>{
    const existingUser=await User.findOne({email})
    if(existingUser)throw new Error("User already exists.")

    const hashedPassword=await bcrypt.hash(password,10)
    const user=new User({email,password:hashedPassword})
    await user.save()

    return user
}

export const signInUser=async(email:string,password:string)=>{
    const user=await User.findOne({email})
    if(!user)throw new Error("Invalid credentials.")

    const validPassword=await bcrypt.compare(password,user.password)
    if(!validPassword)throw new Error("Invalid credentials.")

    const token:string=jwt.sign(
        {_id:user._id}, process.env.TOKEN_SECRET||"tokentest", {expiresIn: "15m"} //hier token ablaufen lassen nach 15min (muss dann aber nochmal auf logout klicken weil hihi)
    )

    return token
}
