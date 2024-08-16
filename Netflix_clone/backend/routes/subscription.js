const express = require("express");
const Subscription = require("../models/Subscription");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const subscriptions = await Subscription.find();
    res.json(subscriptions);
  } catch (err) {
    res.status(500).json({ msg: "Server error" });
  }
});

module.exports = router;
