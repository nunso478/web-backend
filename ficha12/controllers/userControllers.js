const User = require('../sequelize').Users;
var jwt = require('jsonwebtoken');
exports.getUsers = function(req,res,next){
    User.findAll()
    .then(users => {
        res.send(users);
    });
};
exports.deleteUsers = function (request, response) {
    User.destroy({
        where: { id: request.params.id }
    }).then(affectedRows => {
        if (affectedRows == 0) {
            response.status(404);
            response.end("ID not found");
        } else {
            response.send("Product deleted " + affectedRows)
        }
    }).catch(err => {
        response.status(400).send({ "Error": err });
    });
};
/*
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
            User.create({ "email": email, 'password': password })
                .then(user => {
                    const token = generateAccessToken(email, password);
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
            const token = generateAccessToken(email, password);
            req.session.user = user;
            req.session.token = token;
            res.cookie('acces token', token, {
                expires: new Date(Date.now() + 8 * 3600000)
            }).redirect('/profile');
        }
    }).catch(err => {
        req.flash("LoginMessage", err);
        res.redirect('/login')
    });
}*/