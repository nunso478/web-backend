const Product = require('../sequelize').Product;

// Insert table product use post
exports.postProduct = function (request, response, next) {
    var details = request.body;
    Product.create(details)
        .then(product => {
            if (details == undefined) {
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
exports.putProduct = function (request, response) {
    Product.findOne({
        where: {
            id: request.params.id
        }
    }).then(product => {
        product.increment("views");
        product.reload();
        response.send("UPDATE SUCCESEFULL " + product.views);
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });

};
//via query mostra tabela product  ao por o caminho tags 
exports.getProduct = function (request, response) {

    if (request.query.tags != undefined) {
        Product.findAll({
            where: {
                tags: request.query.tags
            }
        }).then(product => {
            if (product == 0) {
                response.status(404);
                response.send("NOT FOUND TAGS");
            }
            else {
                response.send(product);
            }

        }).catch(err => {
            response.status(404).send({ "ERROR: ": err });

        });
    }
    else {
        Product.findAll().then(product => {
            response.send(product);
        }).catch(err => {
            response.status(404).send({ "ERROR: ": err });

        });
    }
};
exports.deleteProduct = function (request, response) {
    Product.destroy({
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
exports.putProductImage = function (request, response) {
    var details = request.body.images;
    Product.update({ images: details }, {
        where: {
            id: request.params.id
        }
    }).then(product => {
        if (request.query.id == undefined) {
            response.status(404);
            response.end("ID not found");
        } else {
            response.send("UPDATE SUCCESEFULL " + details);
        }
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });
};