const express = require("express");
const router = express.Router();
const { submitName } = require("../controllers/nameController.js");
const { submitBMI } = require("../controllers/bmiController.js");

// Route cho endpoint /submit
router.post("/submit", submitName);
router.post("/submit", submitBMI);

module.exports = router;
