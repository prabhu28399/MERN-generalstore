const express = require("express");
const router = express.Router();
const Category = require("./../../models/inventory/Category");

// GET all categories
router.get("/", async (req, res) => {
  try {
    const categories = await Category.find().sort({ createdAt: -1 });
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single category
router.get("/:id", async (req, res) => {
  try {
    const category = await Category.findById(req.params.id);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE category
router.post("/", async (req, res) => {
  const { categoryname } = req.body;

  if (!categoryname) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const newCategory = new Category({ categoryname });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Category already exists" });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
});

// UPDATE category
router.put("/:id", async (req, res) => {
  const { categoryname } = req.body;

  if (!categoryname) {
    return res.status(400).json({ message: "Category name is required" });
  }

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { categoryname },
      { new: true, runValidators: true }
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json(updatedCategory);
  } catch (err) {
    if (err.code === 11000) {
      res.status(400).json({ message: "Category already exists" });
    } else {
      res.status(500).json({ message: err.message });
    }
  }
});

// DELETE category
router.delete("/:id", async (req, res) => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(req.params.id);

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.json({ message: "Category deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
