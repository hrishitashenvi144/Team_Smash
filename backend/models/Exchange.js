const mongoose = require("mongoose");

const ExchangeSchema = new mongoose.Schema({
  resource_id: String,
  sender_business: String,
  receiver_business: String,
  status: {
    type: String,
    default: "pending"
  },
  impact_metrics: Object,
  impact_summary: String,

  created_at: {
    type: Date,
    default: Date.now
  }

});

module.exports = mongoose.model("Exchange", ExchangeSchema);