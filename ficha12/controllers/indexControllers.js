const User = require('../sequelize').Users;
var jwt = require('jsonwebtoken');

function generateAccessToken(email, password) {
    var token = jwt.sign({ email, password }, process.env.TOKEN_SECRET, { expiresIn: '1800s' });
    return token;
}
exports.signup = function (req, res) {
    var { email } = req.body;
    var { password } = req.body;
    User.findOne({
        where: {
            email: email
        }
    }).then(result => {
        if (result == null) {
            Users.create({ "email": email, 'password': password })
                .then(user => {
                    var token = generateAccessToken(email, password);
                    req.session.user = user;
                    req.session.token = token;
                    res.redirect('/profile');
                })
        }
        else {
            req.flash('SignupMessage', 'that  e-mail is already have');
            res.redirect('/signup');
        }
    }).catch(err => {
        req.flash("signupMessage", err);
        res.redirect('/signup')
    });

}
exports.login = function (req, res) {
    var { email, password } = req.body;

    User.findOne({
        where: {
            email: email
        }
    }).then(user => {
        if (user.password == null) {
            req.flash("LoginMessage", 'No user found with');
            res.redirect('/login');
        }
        if (user.password != password) {
            req.flash("LoginMessage", 'oops wrong password');
            res.redirect('/login');
        }
        else {
            var token = generateAccessToken(email, password);
            req.session.User = user;
            req.session.token = token;
            res.cookie('acces token', token, {
                expires: new Date(Date.now() + 8 * 3600000)
            }).redirect('/profile');
        }
    }).catch(err => {
        req.flash("LoginMessage", err);
        res.redirect('/login')
    });
}