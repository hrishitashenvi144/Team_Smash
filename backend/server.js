require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dashboardRoutes=require("./routes/dashboardRoutes")
const exchangeRoutes = require("./routes/exchangeRoutes");
const impactRoutes = require("./routes/impactRoutes");
const resourceRoutes=require("./routes/resourceRoutes")
const matchingRoutes=require("./routes/matchingRoutes")
const app = express();

app.use(cors());
app.use(express.json());
app.use("/api",matchingRoutes);
app.use("/api",resourceRoutes);
app.use("/api", exchangeRoutes);
app.use("/api", dashboardRoutes);
// ⭐ VERY IMPORTANT CONNECTION FIX
mongoose.connect(process.env.MONGO_URI)
.then(() => {
  console.log("✅ MongoDB Connected Successfully");
})
.catch((err) => {
  console.log("❌ MongoDB Connection Error:", err);
});

// routes

app.use("/api", impactRoutes);

app.get("/", (req, res) => {
  res.send("Backend running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("🚀 Server running on port", PORT);
});