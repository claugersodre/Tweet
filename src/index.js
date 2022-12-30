const express = require('express');
const app = express();
const router =require("./routes/router.js")
require('dotenv').config()
const port =  process.env.PORT || 3000;


app.listen(port, function () {
	console.log("listen on port " + port)
})

app.use('/', router);
