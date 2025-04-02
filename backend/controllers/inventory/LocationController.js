const Location = require("../../models/inventory/Location");
const Product = require("../../models/inventory/Product");

exports.addLocation = async (req, res) => {
  const location = new Location({
    product: req.body.product,
    room: req.body.room,
    row: req.body.row,
    section: req.body.section,
    container: req.body.container,
  });

  try {
    const newLocation = await location.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getLocations = async (req, res) => {
  try {
    const locations = await Location.find().populate("product", "name");
    res.json(locations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
