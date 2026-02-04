import {Schema, model} from 'mongoose';
//create a cart schema
const cartSchema = new Schema({
    product: {
        type: Schema.Types.ObjectId,
        ref: 'Product', // reference to product model
    },
    quantity: {
        type: Number,
        default: 1,
        min: [1, "Quantity cannot be less than 1"]  
    }
});

const userSchema=new Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
        unique:true
    },
    password:{
        type:String,
        required:[true,"Password is required"]
    },
    cart:{
        type:[cartSchema],
        default:[]
        
    }
    
});
export const User = model('User', userSchema);