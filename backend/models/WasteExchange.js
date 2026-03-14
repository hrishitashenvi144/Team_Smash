const mongoose = require("mongoose");

const WasteExchangeSchema = new mongoose.Schema({
  resource_type: {
    type: String,
    required: true
  },
  quantity: {
    type: Number,
    required: true
  },
  distance_km: {
    type: Number,
    required: true
  },
  impact_metrics: {
    type: Object
  },
  impact_summary: {
    type: String
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("WasteExchange", WasteExchangeSchema);