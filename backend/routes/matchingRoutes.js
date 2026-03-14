const express=require("express");
const path = require("path");
const Resource = require(path.join(__dirname,"../models/Resources"));

const router=express.Router();

router.get("/match/:type", async (req, res) => {
  try {

    const type = req.params.type;

    const matches = await Resource.find({
      resource_type: type
    });

    res.json(matches);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
module.exports = router;
