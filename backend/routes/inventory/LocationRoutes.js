const express = require("express");
const router = express.Router();
const Location = require("./../../models/inventory/Location");
const Product = require("./../../models/inventory/Product");

// GET all locations
router.get("/", async (req, res) => {
  try {
    const locations = await Location.find().populate(
      "product",
      "name price quantity"
    );
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET single location
router.get("/:id", async (req, res) => {
  try {
    const location = await Location.findById(req.params.id).populate(
      "product",
      "name price quantity"
    );
    if (!location) {
      return res.status(404).json({ message: "Location not found" });
    }
    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET location by product ID
router.get("/product/:productId", async (req, res) => {
  try {
    const location = await Location.findOne({
      product: req.params.productId,
    }).populate("product", "name price quantity");

    if (!location) {
      return res
        .status(404)
        .json({ message: "Location not found for this product" });
    }

    res.json(location);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// CREATE location
router.post("/", async (req, res) => {
  const { product, room, row, section, container } = req.body;

  if (!product || !room || !row || !section || !container) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    // Check if product exists
    const productExists = await Product.findById(product);
    if (!productExists) {
      return res.status(400).json({ message: "Product not found" });
    }

    // Check if location already exists for this product
    const existingLocation = await Location.findOne({ product });
    if (existingLocation) {
      return res
        .status(400)
        .json({ message: "Location already exists for this product" });
    }

    const newLocation = new Location({
      product,
      room,
      row,
      section: section.toUpperCase(),
      container,
    });

    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE location
router.put("/:id", async (req, res) => {
  const { room, row, section, container } = req.body;

  try {
    const updatedLocation = await Location.findByIdAndUpdate(
      req.params.id,
      {
        room,
        row,
        section: section ? section.toUpperCase() : undefined,
        container,
      },
      { new: true, runValidators: true }
    );

    if (!updatedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.json(updatedLocation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE location
router.delete("/:id", async (req, res) => {
  try {
    const deletedLocation = await Location.findByIdAndDelete(req.params.id);

    if (!deletedLocation) {
      return res.status(404).json({ message: "Location not found" });
    }

    res.json({ message: "Location deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
