import express from 'express';
import { hash } from 'bcryptjs';
import { isValidObjectId } from 'mongoose';
import { User } from '../models/userModels.js';
import { Product } from '../models/productModels.js';
export const userApi = express.Router();

//create user
userApi.post("/users", async (req, res) => {
    try {
        let newUserData = req.body;
        // create a User document and validate
        let userDoc = new User(newUserData);
        await userDoc.validate();

        // hash password and save
        userDoc.password = await hash(userDoc.password, 10);
        await userDoc.save();

        res.status(201).json({ message: "User created successfully", payload: userDoc });
    } catch (err) {
        res.status(400).json({ message: "Invalid user data", error: err.message });
    }
});


userApi.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  //read uid and pid from url parameters
  let { uid, pid } = req.params; //{ uid:"" , pid:""}

  //check user
  let user = await UserModel.findById(uid); //it prints user document
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  //check product
  let product = await ProductModel.findById(pid);
  console.log("product", product);
  if (!product) {
    return res.status(401).json({ message: "Product not found" });
  }
  //perform update
  let modifiedUser = await UserModel.findByIdAndUpdate(
    uid,
    { $push: { cart: { product: pid } } },
    { new: true },
  ).populate("cart.product");
  //res
  res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
});

//adding or updating product in cart
userApi.put("/user-cart/user-id/:uid/product-id/:pid", async (req, res) => {
  //read uid and pid from url parameters
  let { uid, pid } = req.params; //{ uid:"" , pid:""}

  //check user
  let user = await User.findById(uid); //it prints user document
  if (!user) {
    return res.status(401).json({ message: "User not found" });
  }
  //check product
  let product = await Product.findById(pid);
  console.log("product", product);
  if (!product) {
    return res.status(401).json({ message: "Product not found" });
  }
  //perform update
  let modifiedUser = await User.findByIdAndUpdate(
    uid,
    { $push: { cart: { product: pid } } },
    { new: true },
  ).populate("cart.product");
  //res
  res.status(200).json({ message: "Product added to cart", payload: modifiedUser });
});

//read user by id
userApi.get("/users/:userid", async (req, res) => {
    try {
        let { userid } = req.params;
        if (!isValidObjectId(userid)) {
            return res.status(400).json({ message: "Invalid user id" });
        }
        let user = await User.findById(userid).populate('cart.product', 'productname price brand');
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json({ message: "User found", payload: user });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error", error: err.message });
    }
});