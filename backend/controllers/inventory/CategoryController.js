const Category = require("../../models/inventory/Category");

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addCategory = async (req, res) => {
  const category = new Category({
    categoryname: req.body.categoryname,
    categoryid: req.body.categoryid,
  });

  try {
    const newCategory = await category.save();
    res.status(201).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};
