const express = require("express");
const router = express.Router();
const pharmacyController = require("../controllers/pharmacyController");

router.get("/", pharmacyController.getPharmacies);

module.exports = router;
