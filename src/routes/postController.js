const express = require("express");
const luxon = require("luxon");
const router = express.Router();
const postsRepository = require("../repository/postsRepository.js");

router.post("/create", async function (req, res) {
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    typeof req.body.message === "undefined" ||
    typeof req.body.user === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const postsModel = {
    message: req.body.message,
    userId: req.body.user,
    data: luxon.DateTime.now()
  };
  try {
    const posts = await postsRepository.createPosts(postsModel);
    console.log("OK createOne POSTS: ", posts);
    return res.status(201).json(posts);
  } catch (error) {
    console.log("ERROR in createOne " + "POSTS:", error);
    return res.status(500).json(error);
  }
});

router.get("/getAll", async function (req, res) {
  try {
    const allPostss = await postsRepository.getAllPosts();
    console.log(
      "OK getAll POSTS: ",
      allPostss.map((el) => el.dataValues)
    );
    return res.status(200).json(allPostss);
  } catch (error) {
    console.log("ERROR in getAll " + "POSTS:", error);
    return res.status(500).json(error);
  }
});

router.put("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing Posts id" });
  }
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    typeof req.body.message === "undefined" ||
    typeof req.body.user === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const postsModel = {
    message: req.body.message,
    userId: req.body.user,
    data: luxon.DateTime.now()
  };
  try {
    const posts = await postsRepository.updatePostsById(
      req.params.id,
      postsModel
    );
    return res.status(posts.status ? posts.status : 200).json(posts);
  } catch (error) {
    console.log(`ERROR in Update Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.get("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing Posts id" });
  }
  try {
    const posts = await postsRepository.getPostsById(req.params.id);
    return res.status(posts.status ? posts.status : 200).json(posts);
  } catch (error) {
    console.log(`ERROR in Get Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.delete("/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing Posts id" });
  }
  try {
    const posts = await postsRepository.deletePostsById(req.params.id);
    return res.status(posts.status ? posts.status : 200).json(posts);
  } catch (error) {
    console.log(`ERROR in Delete Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
router.get("/userId/:id", async function (req, res) {
  if (req.params.id == null) {
    return res.status(400).json({ message: "Missing Posts id" });
  }
  try {
    const posts = await postsRepository.getPostsByUserId(req.params.id);
    return res.status(posts.status ? posts.status : 200).json(posts);
  } catch (error) {
    console.log(`ERROR in Get Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
module.exports = router;
