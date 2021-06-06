const Product = require('../sequelize').Product;

exports.getProduct = function (request, response) {
    Product.findAll().then(product => {
        response.send(product);
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });

};

// Insert table product use post
exports.postProduct = function (request, response, next) {
    var details = request.body;
    Product.create(details)
        .then(product => {
            if (details == null) {
                response.status(404);
                response.end(error.message);
            }
            else {
                response.status(200).send("Inserted id: " + product.id);
            }
        }).catch(err => {
            response.status(404).send({ "ERROR: ": err });

        });
};