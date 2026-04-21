const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// Add product
router.post("/", async (req, res) => {
    try {
        const product = new Product(req.body);
        const saved = await product.save();
        res.json(saved);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Get all products
router.get("/", async (req, res) => {
    const products = await Product.find();
    res.json(products);
});

module.exports = router;