const express = require("express");
const router = express.Router();
const Product = require("./../../models/inventory/Product");
const Category = require("./../../models/inventory/Category");

// GET all products
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().populate("category", "categoryname");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single product
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate(
      "category",
      "categoryname"
    );
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE product
router.post("/", async (req, res) => {
  const { name, price, quantity, category } = req.body;

  if (!name || !price || !quantity || !category) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if category exists
    const categoryExists = await Category.findById(category);
    if (!categoryExists) {
      return res.status(400).json({ message: "Category not found" });
    }

    const newProduct = new Product({
      name,
      price,
      quantity,
      category,
    });

    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE product
router.put("/:id", async (req, res) => {
  const { name, price, quantity, category } = req.body;

  try {
    // Check if category exists when provided
    if (category) {
      const categoryExists = await Category.findById(category);
      if (!categoryExists) {
        return res.status(400).json({ message: "Category not found" });
      }
    }

    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { name, price, quantity, category },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE product
router.delete("/:id", async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json({ message: "Product deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
