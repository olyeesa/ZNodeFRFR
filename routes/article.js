let express = require('express');
let articleController = require(".../controllers/articleController.js");
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended : false});
let jsonParser = express.json();


router.get('/',articleController.getArticleAll);
router.get('/: idArticle',articleController.getArticle);


module.exports = router;