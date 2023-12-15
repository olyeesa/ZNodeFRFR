let express = require('express');
let adminController = require("../controllers/adminController.js");
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended : false});
let jsonParser = express.json();


router.get('/',adminController.getArticleAll);
router.get('/:idArticle',adminController.getArticle);
router.get('/addArticle',adminController.addArticle);
router.get('/editArticle',adminController.editArticle);
router.get('/deleteArticle',adminController.deleteArticle);


module.exports = router;