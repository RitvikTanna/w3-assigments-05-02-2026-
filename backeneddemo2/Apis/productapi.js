import express from "express"
import { Product } from "../Models/ProductsModels.js"

export const productApp = express.Router()

// GET all products
productApp.get("/products", async (req, res) => {
  try {
    const products = await Product.find()
    res.status(200).json({ message: "Products list", payload: products })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
})

// GET product by productId
productApp.get("/products/:id", async (req, res) => {
  try {
    const product = await Product.findOne({
      productId: Number(req.params.id)
    })

    if (!product)
      return res.status(404).json({ message: "Product not found" })

    res.status(200).json({ message: "Product found", payload: product })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
})

// GET products by brand (case-insensitive)
productApp.get("/products/brand/:brand", async (req, res) => {
  try {
    const products = await Product.find({
      brand: new RegExp(`^${req.params.brand}$`, "i")
    })

    if (products.length === 0)
      return res.status(404).json({ message: "No products found" })

    res.status(200).json({ message: "Products found", payload: products })
  } catch (err) {
    res.status(500).json({ message: "Server error" })
  }
})

// CREATE product
productApp.post("/products", async (req, res) => {
  try {
    const product = await Product.create(req.body)
    res.status(201).json({ message: "Product created", payload: product })
  } catch (err) {
    res.status(400).json({ message: "Invalid product data" })
  }
})

// UPDATE product by productId
productApp.put("/products/:id", async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { productId: Number(req.params.id) },
      { $set: req.body },
      { new: true }
    )

    if (!updatedProduct)
      return res.status(404).json({ message: "Product not found" })

    res.status(200).json({
      message: "Product updated",
      payload: updatedProduct
    })
  } catch (err) {
    res.status(400).json({ message: "Update failed" })
  }
})

// DELETE product
productApp.delete("/products/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({
      productId: Number(req.params.id)
    })

    if (!deletedProduct)
      return res.status(404).json({ message: "Product not found" })

    res.status(200).json({
      message: "Product deleted",
      payload: deletedProduct
    })
  } catch (err) {
    res.status(500).json({ message: "Delete failed" })
  }
})
