const Product = require("../../models/inventory/Product");
const Category = require("../../models/inventory/Category");

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category", "categoryname");
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addProduct = async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    quantity: req.body.quantity,
    category: req.body.category,
  });

  try {
    const newProduct = await product.save();
    res.status(201).json(newProduct);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
