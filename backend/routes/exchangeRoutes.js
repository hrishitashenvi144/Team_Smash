const express = require("express");
const path = require("path");
const Exchange = require(path.join(__dirname,"../models/Exchange"));
const router = express.Router();
const axios = require("axios");
const Resource = require(path.join(__dirname,"../models/Resources"));


// create exchange request
// router.post("/request-exchange", async (req, res) => {
//   try {
//     const exchange = new Exchange(req.body);
//     await exchange.save();
//     res.json({ message: "Exchange request created", exchange });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// });

router.post("/request-exchange", async (req, res) => {
  try {

    console.log("BODY:", req.body);

    const exchange = new Exchange(req.body);

    const saved = await exchange.save();

    res.json(saved);

  } catch (err) {
    console.log("ERROR:", err);
    res.status(500).json({ error: err.message });
  }
});

// view all exchanges
router.get("/exchanges", async (req, res) => {
  const exchanges = await Exchange.find();
  res.json(exchanges);
});

// update exchange status
// router.put("/exchange-status/:id", async (req, res) => {
//   await Exchange.findByIdAndUpdate(req.params.id, {
//     status: req.body.status
//   });
//   res.json({ message: "Status updated" });
// });

router.put("/exchange-status/:id", async (req, res) => {
  try {

    const exchange = await Exchange.findById(req.params.id);
    const resource = await Resource.findById(exchange.resource_id);

    if (!exchange) {
      return res.status(404).json({ error: "Exchange not found" });
    }

    // ⭐ STEP 1 — update status
    exchange.status = req.body.status;

    // ⭐ STEP 2 — ADD AI CODE HERE
    if (req.body.status === "completed") {

      const aiResponse = await axios.post(
        process.env.PYTHON_SERVICE_URL + "/impact-analysis",
        {
          resource_type: resource.resource,
          quantity: resource.quantity,
          distance_km: 3
        }
      );

      exchange.impact_metrics = aiResponse.data.impact_metrics;
      exchange.impact_summary = aiResponse.data.impact_summary;
    }

    // ⭐ STEP 3 — save exchange AFTER AI call
    await exchange.save();

    res.json({
      message: "Status updated",
      exchange
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;