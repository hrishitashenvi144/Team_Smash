const express = require("express");
const axios = require("axios");
const path = require("path");

// SAFE model import (avoids path issues)
const WasteExchange = require(
  path.join(__dirname, "../models/WasteExchange")
);

const router = express.Router();

router.post("/analyze-impact", async (req, res) => {
  try {
    const { resource_type, quantity, distance_km } = req.body;

    console.log("Request received:", req.body);

    // call python AI service
    const response = await axios.post(
      process.env.PYTHON_SERVICE_URL + "/impact-analysis",
      {
        resource_type,
        quantity,
        distance_km
      }
    );

    const impactData = response.data;

    console.log("AI Response:", impactData);

    // save to MongoDB
    const newRecord = new WasteExchange({
      resource_type,
      quantity,
      distance_km,
      impact_metrics: impactData.impact_metrics,
      impact_summary: impactData.impact_summary
    });

    await newRecord.save();

    console.log("Saved to MongoDB");

    res.json(impactData);

  } catch (error) {
    console.log("FULL ERROR:", error.message);

    res.status(500).json({
      error: "Impact analysis failed",
      details: error.message
    });
  }
});

module.exports = router;