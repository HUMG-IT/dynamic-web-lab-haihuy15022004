const express = require("express");
const router = express.Router();
const { submitName } = require("../controllers/nameController.js");
const { submitBMI } = require("../controllers/bmiController.js");

// Route cho endpoint /submit
router.post("/submit", submitName);

// Route cho endpoint /submit-bmi
router.post("/submit-bmi", submitBMI);

module.exports = router;
