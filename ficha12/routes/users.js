var express = require('express');
const { authenticate } = require('passport');
var router = express.Router();
var userController = require('../controllers/userControllers');
var jwt = require('jsonwebtoken');
const { token } = require('morgan');



//authenticate function as midleware on the router
router.use(authenticateTokenFromHeadrs);
/* GET users listing. */
 router.get('/',userController.getUsers)
 router.delete('/',userController.deleteUsers)
function authenticateTokenFromHeadrs(req,res,next){
   const authHeader = req.headers['authorization'];
   const token = authHeader && authHeader.split(' ')[1];
   if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403); 
        req.user = user;
        next();
    });
 }




module.exports = router;
