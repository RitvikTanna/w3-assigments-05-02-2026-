import express from "express"
//create a mini express application (is a separate route)
//it contains only http handling routes related to users

import mongoose from "mongoose"
import {userApp} from  "./Apis/userApi.js"
import {productApp} from "./Apis/productApi.js"
import cookieParser from "cookie-parser"

const app = express()

//only after successful connection to db start the server
/*async function connectDB(){
    try{
        await connect("mongodb://localhost:27017") //instead of local host use 
        console.log("Connected to MongoDB")
        app.listen(3000,()=>console.log("Server running on port 3000"))
    }catch(err){
        console.log(err)
    }
}
connectDB()
app.listen(3000,()=>console.log("Server running on port 3000"))
//keep the parser in middleware
*/
app.use(express.json()) //middleware to parse json
app.use(cookieParser()) //middleware to parse cookies

//forward req to userApp when route starts with '/user-api'
app.use('/user-api',userApp)
app.use('/product-api',productApp)



async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/mern_backend")
        console.log("MongoDB connected")
        app.listen(3000, () =>console.log("Server running on port 3000"))
    } catch (err) {
        console.error("DB connection error:", err)
    }
}

connectDB()
//custom middleware
/*function middleware1(req,res,next){
    console.log("middleware-1 executed");
    next()
}

function middleware2(req,res,next){
    console.log("middleware-2 executed")
}*/




  //server.js doesnot know the location of apis

  //client only expects json response from server(default behavior of express)

  //1 express is enough to create apis

  









  //create database
  //use db-name

  //read databases
  //show databases (returns only non empty dbs)

  //create collection
    //db.createCollection('collection-name')