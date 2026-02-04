import mongoose from "mongoose"

const productSchema = new mongoose.Schema({
    productId: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    price: { type: Number, required: true },
    brand: { type: String, required: true }
})

export const Product = mongoose.model("Product", productSchema)