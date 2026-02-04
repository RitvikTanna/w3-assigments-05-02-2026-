import mongoose from 'mongoose';

//create user schema(username, password, age)
const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:[true,"Username is required"],
        minLength:[4,"Min length should be 4"],
        maxLength:[6,"Max length should be 20"],
    },
    password:{
        type:String,
        required:[true,"Password is required"],
    },
    age:{
        type:Number,
        required:[true,"Age is required"],
        min:[18,"Min age should be 18"],
        max:[60,"Max age should be 60"],
    }

})
//create User Model with that schema
export const User=mongoose.model("User",userSchema) //mongoose pluralizes the model name to create collection name
//let mongoose pluralize "user" to "users" and create collection "users" in the database