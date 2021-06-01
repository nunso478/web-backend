var express = require('express');
var router = express.Router();

var userController = require('../controllers/userscontrollers');

router.get('/',userController.getUsers);

module.exports = router;