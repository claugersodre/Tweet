const express = require('express')
const router = express.Router()
const axios = require('axios')

router.post('/',async function (req,res){
    console.log(req.body)
});