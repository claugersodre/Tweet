const express = require("express");
const luxon = require("luxon");
const router = express.Router();
const rePostsRepository = require("../repository/rePostsRepository.js");

router.post("/create", async function (req, res) {
  // User can repost Post or Quote-post
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    typeof req.body.postId === "undefined" ||
    typeof req.body.userId === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const rePostsModel = {
    postId: req.body.postId,
    userId: req.body.userId,
    data: luxon.DateTime.now()
  };
  try {
    const rePosts = await rePostsRepository.createRePosts(rePostsModel);
    console.log("OK createOne rePosts: ", rePosts);
    return res.status(201).json(rePosts);
  } catch (error) {
    console.log("ERROR in createOne " + "rePosts:", error);
    return res.status(500).json(error);
  }
});

router.get("/getAll/:page?", async function (req, res) {
  try {
    // Format pagination
    let page = req.params.page ? req.params.page * 1 : 0;
    page *= process.env.PAGINATION * 1;
    const allPostss = await rePostsRepository.getAllRePosts(page);
    console.log(
      "OK getAll rePosts: ",
      allPostss.map((el) => el.dataValues)
    );
    return res.status(200).json(allPostss);
  } catch (error) {
    console.log("ERROR in getAll " + "rePosts:", error);
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
    typeof req.body.postId === "undefined" ||
    typeof req.body.userId === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const rePostsModel = {
    postId: req.body.postId,
    userId: req.body.userId,
    data: luxon.DateTime.now()
  };
  try {
    const rePosts = await rePostsRepository.updateRePostsById(
      req.params.id,
      rePostsModel
    );
    return res.status(rePosts.status ? rePosts.status : 200).json(rePosts);
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
    const rePosts = await rePostsRepository.getRePostsById(req.params.id);
    return res.status(rePosts.status ? rePosts.status : 200).json(rePosts);
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
    const rePosts = await rePostsRepository.deleteRePostsById(req.params.id);
    return res.status(rePosts.status ? rePosts.status : 200).json(rePosts);
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
    const rePosts = await rePostsRepository.getPostsReByUserId(req.params.id);
    return res.status(rePosts.status ? rePosts.status : 200).json(rePosts);
  } catch (error) {
    console.log(`ERROR in Get Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
module.exports = router;
