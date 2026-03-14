const mongoose = require("mongoose");

const ResourceSchema = new mongoose.Schema({
  business_name: String,
  resource_type: String,
  quantity: Number,
  location: String,
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Resource", ResourceSchema);