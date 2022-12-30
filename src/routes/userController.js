const express = require("express");
const router = express.Router();

router.post("/create", async function (req, res) {
  console.log(req.body);
  if (typeof req.body === "undefined") {
    res.status(400).json({ message: "Need to provide a body" });
  }
  if (req.username || req.password || req.email) {
    res.status(400).json({ message: "Some parameter are missing" });
  }
});
router.post("/getAll", async function (req, res) {
  console.log(req.body);
});
module.exports = router;
