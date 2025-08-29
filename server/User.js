//models is a folder to store db schema
import mongoose from  "mongoose";
const userSchema=new mongoose.Schema({
    fullname:{
        type:String,
    },
    age:{
        type:Number,
    },
    isAlive:{
        type:Boolean,
    },
    email:{
        type:String,
    },
    password:{
        type:String,
    }
})