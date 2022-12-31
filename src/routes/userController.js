const express = require("express");
const router = express.Router();
const userRepository = require("../repository/userRepository.js");
const User = require("../models/users");
router.post("/create", async function (req, res) {
  console.log(req.body);
  if (typeof req.body === "undefined") {
    res.status(400).json({ message: "Need to provide a body" });
  }
  if (req.username || req.password || req.email) {
    res.status(400).json({ message: "Some parameter are missing" });
  }
  const userModel = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    role: req.body.role
  };
  try {
    const user = await userRepository.createUser(userModel);
    console.log("OK createOne USER: ", user);
    return res.status(201).json(user);
  } catch (error) {
    console.log("ERROR in createOne " + "USER:", error);
    return res.status(500).json(error);
  }
});
router.get("/getAll", async function (req, res) {
  try {
    const allUsers = await userRepository.getAllUsers();
    console.log(
      "OK getAll USER: ",
      allUsers.map((el) => el.dataValues)
    );
    return res.status(200).json(allUsers);
  } catch (error) {
    console.log("ERROR in getAll " + "USER:", error);
    return res.status(500).json(error);
  }
});
module.exports = router;
