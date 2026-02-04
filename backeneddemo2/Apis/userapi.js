// Import required modules
import express from "express"
import { User } from "../Models/UserModels.js"
import { verifyTOKEn } from "./middleware.js"

// Create a router instance
export const userApp = express.Router()

//get user 
userApp.get("/users", async (req, res) => {
  try {
    // Fetch all users from database
    const users = await User.find()

    // Send success response
    res.status(200).json({
      message: "Users list",
      payload: users
    })
  } catch (err) {
    // Handle server error
    res.status(500).json({
      message: "Server error",
      error: err.message
    })
  }
})

//create user
userApp.post("/users", async (req, res) => {
  try {
    // Create new user using request body
    const user = await User.create(req.body)

    // Send success response
    res.status(201).json({
      message: "User created",
      payload: user
    })
  } catch (err) {
    // Handle validation errors (e.g., username length)
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors
      })
    }

    // Handle other server errors
    res.status(500).json({
      message: "Server error",
      error: err.message
    })
  }
})

//get user by id
userApp.get("/users/:id", async (req, res) => {
  try {
    // Convert route param to number
    const userId = Number(req.params.id)

    // Find user by id
    const user = await User.findOne({ id: userId })

    // If user not found
    if (!user) {
      return res.status(404).json({ message: "User not found" })
    }

    // Send success response
    res.status(200).json({
      message: "User found",
      payload: user
    })
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    })
  }
})

//update user
userApp.put("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id)

    // Update user and run schema validators
    const updatedUser = await User.findOneAndUpdate(
      { id: userId },          // condition
      { $set: req.body },      // fields to update
      {
        new: true,             // return updated document
        runValidators: true    
      }
    )

    // If user not found
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    // Send success response
    res.status(200).json({
      message: "User updated",
      payload: updatedUser
    })
  } catch (err) {
    // Handle validation errors
    if (err.name === "ValidationError") {
      return res.status(400).json({
        message: "Validation failed",
        errors: err.errors
      })
    }

    res.status(500).json({
      message: "Server error",
      error: err.message
    })
  }
})

//delete user
userApp.delete("/users/:id", async (req, res) => {
  try {
    const userId = Number(req.params.id)

    // Delete user by id
    const deletedUser = await User.findOneAndDelete({ id: userId })

    // If user not found
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" })
    }

    // Send success response
    res.status(200).json({
      message: "User deleted",
      payload: deletedUser
    })
  } catch (err) {
    res.status(500).json({
      message: "Server error",
      error: err.message
    })
  }
})

//test route
userApp.get("/test", verifyTOKEn, (req, res) => {
  res.status(200).json({
    message: "User API is working"
  })
})
