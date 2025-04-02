const mongoose = require("mongoose");

const LocationSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
    unique: true,
  },
  room: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  row: {
    type: Number,
    required: true,
    min: 1,
    max: 10,
  },
  section: {
    type: String,
    required: true,
    uppercase: true,
    validate: {
      validator: function (v) {
        return /^[A-Z]$/.test(v);
      },
      message: (props) => `${props.value} is not a valid section (A-Z)`,
    },
  },
  container: {
    type: Number,
    required: true,
    min: 1,
    max: 30,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Location", LocationSchema);
