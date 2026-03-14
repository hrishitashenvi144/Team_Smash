const express = require("express");
const path = require("path");
const Exchange = require(path.join(__dirname,"../models/Exchange"));

const router = express.Router();

router.get("/dashboard", async (req, res) => {
  try {

    const completed = await Exchange.find({ status: "completed",
        impact_metrics:{$exists:true}
     });

    let totalCO2 = 0;
    let totalLandfill = 0;
    let totalEconomic = 0;

    completed.forEach(ex => {
      if (ex.impact_metrics) {
        totalCO2 += ex.impact_metrics.co2_saved_kg || 0;
        totalLandfill += ex.impact_metrics.landfill_diverted_kg || 0;
        totalEconomic += ex.impact_metrics.economic_value_usd || 0;
      }
    });

    res.json({
      completed_exchanges: completed.length,
      total_co2_saved: totalCO2,
      total_landfill_diverted: totalLandfill,
      total_economic_value: totalEconomic
    });

  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;