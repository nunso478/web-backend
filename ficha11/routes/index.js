var express = require('express');
const { authenticate } = require('passport');
var router = express.Router();
var indexController = require('../controllers/indexControllers');


function authenticateTokenFromSession(req, res, next) {
    const token = req.session.token;
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
        if (err)
            return res.sendStatus(403);
        req.user = user;
        next();
    });
}


router.get('/', function (req, res) {
    res.render('index.ejs'); // load the index.ejs file
});
router.get('/login', function (req, res) {
    res.render('login.ejs', { message: req.flash('LoginMessage') }); // load the index.ejs file
});
router.get('/signup', function (req, res) {
    res.render('signup.ejs', { message: req.flash('signupMessage') });
});
router.get('/profile', authenticateTokenFromSession, function (req, res) {
    res.render('profile.ejs', { user: req.user }); // get the user out of session and pass to template
});
router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});
router.post('/login', indexController.login);
router.post('/signup', indexController.signup);

module.exports = router;