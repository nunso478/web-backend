const Person = require('../sequelize').Person;

exports.getPerson = function (req, res, next) {
    Person.findAll()
        .then(result => {
            res.json({ data: result });
        })
};