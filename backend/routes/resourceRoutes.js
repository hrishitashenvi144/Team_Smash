const express = require("express");
const path = require("path");
const Resource = require(path.join(__dirname,"../models/Resources"));


const router = express.Router();

// POST resource listing
router.post("/add-resource", async (req, res) => {
  try {
    const resource = new Resource(req.body);
    await resource.save();
    res.json({ message: "Resource added", resource });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET all resources
router.get("/resources", async (req, res) => {
  const resources = await Resource.find();
  res.json(resources);
});

module.exports = router;

router.get("/test-ai", async (req, res) => {
  try {

    const axios = require("axios");

    const response = await axios.post(
      process.env.PYTHON_SERVICE_URL + "/impact-analysis",
      {
        resource_type: "coffee_waste",
        quantity: 20,
        distance_km: 3
      }
    );

    res.json(response.data);

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});