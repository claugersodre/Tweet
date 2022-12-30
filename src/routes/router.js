const express = require('express')
const router = express.Router()
const axios = require('axios')
const usersController = require ('./userController')
router.post('/', async function (req, res) {
    console.log(req.body)
});
router.get('/', async function (req, res) {
    console.log("hi!")
    res.status(200).json({ message: "hi!" })
});
router.use('/users',usersController)
module.exports = router;