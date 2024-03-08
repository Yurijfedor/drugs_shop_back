const mongoose = require("mongoose");

const drugSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
  stockQuantity: { type: Number, default: 0 },
  category: { type: String },
  pharmacies: [{ type: String }],
});

const Drug = mongoose.model("drugs", drugSchema);

module.exports = Drug;
