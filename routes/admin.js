let express = require('express');
let adminController = require(".../controllers/adminontroller.js");
let router = express.Router();
let bodyParser = require('body-parser');
let urlencodedParser = bodyParser.urlencoded({extended : false});
let jsonParser = express.json();

<<<<<<< HEAD
//Комментарий из ветки моделей
=======

>>>>>>> 670c255300ebda3f3422dc47c582dc04399b5a3f
router.get('/',adminController.getArticleAll);
router.get('/: idArticle',adminController.getArticle);
router.get('/addArticle',adminController.addArticle);
router.get('/editArticle',adminController.editArticle);
router.get('/deleteArticle',adminController.deleteArticle);


module.exports = router;