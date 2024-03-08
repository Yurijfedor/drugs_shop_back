const Pharmacy = require("../models/pharmaciesModel");

exports.getPharmacies = async (req, res) => {
  try {
    const pharmacies = await Pharmacy.find();
    res.json(pharmacies);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
