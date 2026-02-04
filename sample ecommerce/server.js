import express from 'express';
import {connect} from 'mongoose';
import { productApi } from './apis/productapi.js';
import { userApi } from './apis/userapi.js';


const app = express();
app.use(express.json());


//connect to mongodb database
async function connectDb(){
    
        await connect('mongodb://localhost:27017/ecommerce');
        console.log('Connected to MongoDB');
        app.listen(3000,()=>{
            console.log('Server is running on port 3000');
        });
   
}

connectDb();

//define a body middleware
app.use(express.json());

//forward requests to respective routers
app.use('/products',productApi);
app.use('/users',userApi);
app.use('/user-api', userApi);

