const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/', async function (req, res) {
    console.log(req.body)
});
router.get('/', async function (req, res) {
    console.log("hi!")
    res.status(200).json({ message: "hi!" })
});
module.exports = router;