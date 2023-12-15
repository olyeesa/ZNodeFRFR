let express = require('express');
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended : false});
let jsonParser = express.json();
let homeController = require(".../controllers/homeController.js");

router.get('/',homeController.getIndex);

module.exports = router;