import { Schema, model } from 'mongoose';  
import { type } from 'os';
const productSchema = new Schema({  
    productname: {
         nnntype: String,
        required: [true, "Product name is required"]
    },
    price: {
        type: Number,
        required: [true, "Price is required"]   
    },
    brand:{
        type: String,
        required: [true, "Brand is required"]
    }
    
}, {
    timestamps: true,
    strict: 'throw'
});

export const Product = model('Product', productSchema);