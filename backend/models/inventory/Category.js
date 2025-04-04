const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema({
  categoryname: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  categoryid: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Category", CategorySchema);
