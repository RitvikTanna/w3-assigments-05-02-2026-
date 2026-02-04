import express from 'express';
import { Product } from '../models/productModels.js';
export const productApi = express.Router();

// GET all products
productApi.get("/products", async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({ message: "Products list", payload: products })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
})

// POST a new product
productApi.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({ message: "Product created", payload: product })
  } catch (err) {
    res.status(400).json({ message: "Invalid product data" })
  }
})
