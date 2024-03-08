const mongoose = require("mongoose");

const pharmacyDrugSchema = new mongoose.Schema({
  pharmacy: { type: mongoose.Schema.Types.ObjectId, ref: "Pharmacy" },
  drug: { type: mongoose.Schema.Types.ObjectId, ref: "Drug" },
  availableQuantity: { type: Number, default: 0 },
});

const PharmacyDrug = mongoose.model("PharmacyDrug", pharmacyDrugSchema);

module.exports = PharmacyDrug;
