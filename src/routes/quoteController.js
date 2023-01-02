const express = require("express");
const luxon = require("luxon");
const router = express.Router();
const quoteRepository = require("../repository/quoteRepository.js");

router.post("/create", async function (req, res) {
  // User can quote a repost Post or Quote-post
  if (typeof req.body === "undefined") {
    return res.status(400).json({ message: "Need to provide a body" });
  }
  if (
    (typeof req.body.postId === "undefined" &&
      typeof req.body.repostId === "undefined") ||
    typeof req.body.userId === "undefined" ||
    typeof req.body.comment === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const postId = req.body.postId ? req.body.postId : null;
  const repostId = req.body.repostId ? req.body.repostId : null;
  const quoteModel = {
    postId,
    userId: req.body.userId,
    repostId,
    comment: req.body.comment,
    data: luxon.DateTime.now()
  };
  try {
    const quote = await quoteRepository.createQuote(quoteModel);
    console.log("OK createOne quote: ", quote);
    return res.status(201).json(quote);
  } catch (error) {
    console.log("ERROR in createOne " + "quote:", error);
    return res.status(500).json(error);
  }
});

router.get("/getAll/:page?", async function (req, res) {
  try {
    // Format pagination
    let page = req.params.page ? req.params.page * 1 : 0;
    page *= process.env.PAGINATION * 1;
    const allPostss = await quoteRepository.getAllQuote(page);
    console.log(
      "OK getAll quote: ",
      allPostss.map((el) => el.dataValues)
    );
    return res.status(200).json(allPostss);
  } catch (error) {
    console.log("ERROR in getAll " + "quote:", error);
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
    (typeof req.body.postId === "undefined" &&
      typeof req.body.repostId === "undefined") ||
    typeof req.body.userId === "undefined" ||
    typeof req.body.comment === "undefined"
  ) {
    return res.status(400).json({ message: "Some parameter are missing" });
  }
  const postId = req.body.postId ? req.body.postId : null;
  const repostId = req.body.repostId ? req.body.repostId : null;
  const quoteModel = {
    postId,
    userId: req.body.userId,
    repostId,
    comment: req.body.comment,
    data: luxon.DateTime.now()
  };
  try {
    const quote = await quoteRepository.updateQuoteById(
      req.params.id,
      quoteModel
    );
    return res.status(quote.status ? quote.status : 200).json(quote);
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
    const quote = await quoteRepository.getQuoteById(req.params.id);
    return res.status(quote.status ? quote.status : 200).json(quote);
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
    const quote = await quoteRepository.deleteQuoteById(req.params.id);
    return res.status(quote.status ? quote.status : 200).json(quote);
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
    const quote = await quoteRepository.getPostsReByUserId(req.params.id);
    return res.status(quote.status ? quote.status : 200).json(quote);
  } catch (error) {
    console.log(`ERROR in Get Posts ${req.params.id}`, error);
    return res.status(500).json(error);
  }
});
module.exports = router;
