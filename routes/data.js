const express = require("express");
const router = express.Router();
const DataModel = require("../models/DataModel");

router.get("/getData", async (req, res) => {
  let success = false;
  try {
    const data = await DataModel.find();
    success = true;
    res.json({ success, msg: "Data Retrieved Successfully", data: data });
  } catch (error) {
    success = false;
    res.status(500).send({ success, msg: "Internal server error" });
    console.log(error);
  }
});
module.exports = router;
