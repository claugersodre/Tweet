const express = require('express');
const bodyParser = require('body-parser')
require('dotenv').config()

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))

const sequelize = require('./utils/database.js')
const router =require("./routes/router.js")
const port =  process.env.PORT || 3000;


(async () => {
	try {
	  await sequelize.sync(
		{ force: false} //Reset db every time
	  );
	  app.listen(port, function () {
		console.log("listen on port " + port)
	})
	} catch (error) {
	  console.log(error);
	}
  })();

app.use('/', router);
