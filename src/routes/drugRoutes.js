const express = require("express");
const router = express.Router();
const drugController = require("../controllers/drugController");

router.get("/", drugController.getDrugs);

router.get("/byPharmacy/:pharmacyId", drugController.getDrugsByPharmacyId);

router.get("/:id", drugController.getDrugById);

router.post("/", drugController.createDrug);

router.put("/:id", drugController.updateDrug);

router.delete("/:id", drugController.deleteDrug);

module.exports = router;
