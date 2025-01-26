// Autor: Katharina Brandtner
//user interface

import mongoose,{HydratedDocument}from"mongoose"

export interface IUser{
    password:string
    email:string
    _id:string //MongoDB-Feld
    id?:string //Manuelles `id`-Feld
}

const UserSchema=new mongoose.Schema<IUser>({
    password:{type:String,required:true}, //in token verschlüsselt
    email:{type:String,required:true}
})

export default mongoose.model<IUser>("User",UserSchema)


