var express = require('express');
var router = express.Router();
var personControllers = require('../controllers/personControllers');
/* GET users listing. */
router.get('/', personControllers.getPerson);

module.exports = router;
