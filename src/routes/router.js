const express = require("express");
const router = express.Router();
const usersController = require("./userController");
const postsController = require("./postController.js");
const rePostsController = require("./rePostController.js");
const quoteController = require("./quoteController.js");

router.post("/", async function (req, res) {
  console.log(req.body);
});
router.get("/", async function (req, res) {
  console.log("hi!");
  res.status(200).json({ message: "hi!" });
});
router.use("/users", usersController);
router.use("/posts", postsController);
router.use("/reposts", rePostsController);
router.use("/quote", quoteController);
module.exports = router;
