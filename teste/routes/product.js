var express = require('express');
var router = express.Router();
var productController = require('../controllers/ProductControllers');

router.get('/', productController.getProduct);
router.post('/', productController.postProduct);

module.exports = router;
/*
module.exports = function (app) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function (req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });
    app.get('/product', function (req, res) {
        res.render('product.ejs'); // show the product.ejs file
    });
    app.get('/insert', function (req, res) {
        res.render('insert.ejs'); // show the insert.ejs file
    });
};*/