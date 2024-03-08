const Drug = require("../models/drugsModel");

exports.getDrugs = async (req, res) => {
  try {
    const drugs = await Drug.find();

    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDrugsByPharmacyId = async (req, res) => {
  try {
    const drugs = await Drug.find({ pharmacies: req.params.pharmacyId });
    res.json(drugs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getDrugById = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Товар не знайдено" });
    }
    res.json(drug);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createDrug = async (req, res) => {
  const drug = new Drug({
    name: req.body.name,
    image: req.body.image,
    price: req.body.price,
    description: req.body.description,
    stockQuantity: req.body.stockQuantity,
    category: req.body.category,
  });
  try {
    const newDrug = await drug.save();
    res.status(201).json(newDrug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateDrug = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Товар не знайдено" });
    }
    drug.set(req.body);
    const updatedDrug = await drug.save();
    res.json(updatedDrug);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteDrug = async (req, res) => {
  try {
    const drug = await Drug.findById(req.params.id);
    if (!drug) {
      return res.status(404).json({ message: "Товар не знайдено" });
    }
    await drug.remove();
    res.json({ message: "Товар видалено" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
