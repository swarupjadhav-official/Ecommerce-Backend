const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

// Product Schema
const productSchema = new mongoose.Schema({
  title: String,
  price: Number,
  description: String,
  category: String,
  image: String,
  rating: Number,
  discount: Number,
  offerprice: Number,
  reviews: String,
});

const Product = mongoose.model("Product", productSchema);

// POST API to add a product
router.post("/add", async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();
    res.status(201).json({ message: "Product added successfully", product });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET API to retrieve all products
router.get("/all", async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;

