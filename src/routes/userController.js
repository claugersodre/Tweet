const express = require("express");
const router = express.Router();
const userRepository = require("../repository/userRepository.js");

router.post("/create", async function (req, res) {
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    typeof req.body.username === "undefined" ||
    typeof req.body.password === "undefined" ||
    typeof req.body.email === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const userModel = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
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

router.put("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing User id" });
  }
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    typeof req.body.username === "undefined" ||
    typeof req.body.password === "undefined" ||
    typeof req.body.email === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const userModel = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password
  };
  try {
    const user = await userRepository.updateUserById(req.params.id, userModel);
    return res.status(user.status ? user.status : 200).json(user);
  } catch (error) {
    console.log(`ERROR in Update User ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.get("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing User id" });
  }
  try {
    const user = await userRepository.getUserById(req.params.id);
    return res.status(user.status ? user.status : 200).json(user);
  } catch (error) {
    console.log(`ERROR in Get User ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.post("/:id/posts", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing Posts id" });
  }
  let page = req.body.page ? req.body.page * 1 - 1 : 0;
  const startDate = req.body.startDate ? req.body.startDate * 1 : 365;
  const endDate = req.body.endDate ? req.body.endDate * 1 : 0;
  page *= process.env.PAGINATION * 1;
  try {
    const user = await userRepository.getUserByIdAndUsersPosts(
      req.params.id,
      page,
      startDate,
      endDate
    );
    return res.status(user.status ? user.status : 200).json(user);
  } catch (error) {
    console.log(`ERROR in Get User ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.delete("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing User id" });
  }
  try {
    const user = await userRepository.deleteUserById(req.params.id);
    return res.status(user.status ? user.status : 200).json(user);
  } catch (error) {
    console.log(`ERROR in Delete User ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
module.exports = router;
