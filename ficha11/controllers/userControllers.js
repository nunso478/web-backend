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
