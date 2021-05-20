//importar o express
const { error } = require('console');
const { json, response } = require('express');
const express = require('express');
const fs = require("fs");
const { request } = require('http');
const mysql2 = require('mysql2');
const Sequelize = require('sequelize')
//importar swagger
const swaggerUi = require('swagger-ui-express');
const swaggerJSDoc = require('./swagger.json');

// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000


//funçoes midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

//PARTE A
// Connect and authenticate to DB using Sequelize in JS code
const sequelize = new Sequelize('ficha9', 'root', '', {
    dialect: 'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log("connection has been estalished");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });
//Define a Model
const Product = sequelize.define('product', {
    //attributes
    seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    title: {
        type: Sequelize.STRING
    },
    description: {
        type: Sequelize.STRING
    },
    price: {
        type: Sequelize.DECIMAL
    },
    url: {
        type: Sequelize.STRING
    },
    views: {
        type: Sequelize.INTEGER
    },
    images: {
        type: Sequelize.JSON
    },
    comments: {
        type: Sequelize.JSON
    },
    tags: {
        type: Sequelize.JSON
    }
});
//Synchronize the Models with the Database. Synchronizes all the defined models to the DB.
//If force is true, each model will DROP TABLE IF EXISTS
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    }).then(function () {
        return Product.findAll();
    }).then(function (products) {
        console.log(products);
    }).then(function () {
        return Product.findOne();
    });

//Insert multiple instances in bulk
/*Product.bulkCreate([
    {seller_id:"1",title:"LG",description:"LG G1 65 inch 4K",price:2999,url:"https://www.lg.com/a",views:4000,images:"C:\Users\Mickael\Desktop\images\tvLg",comments:"Funciona",tags:"4k"},
    {seller_id:"2",title:"Samsung",description:"65” QN900A Samsung Neo QLED 8K",price:4999,url:"https://www.samsung.com/",views:10000,images:"C:\Users\Mickael\Desktop\images\samsung",comments:"nao Funciona",tags:"8k"},
    {seller_id:"3",title:"LG",description:"LG C1 77 inch 4K",price:2799,url:"https://www.lg.com/",views:9000,images:"C:\Users\Mickael\Desktop\images\TvLg",comments:"avariado",tags:"2k"},
    {seller_id:"4",title:"Samsung",description:"50 Class TU8000 Crystal UHD 4K",price:469,url:"https://www.samsung.com/",views:20000,images:"C:\Users\Mickael\Desktop\images\samsung",comments:"desligado",tags:"20k"}
    
]).then(function() {
    return product.findAll();
}).then(function(products) {
    console.log(products);
});*/

//show list  all table Product 
app.get('/product', (request, response) => {

    Product.findAll().then(product => {
        response.send(product)
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });

});

// Insert table product use post
app.post('/product', (request, response) => {
    var details = request.body;
    Product.create(details).then(product => {

        response.status(200).send("Inserted id: " + product.id);
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });
});
//via query mostra tabela product  ao por o caminho seller_id por numero 
app.get('/product/seller_id', (request, response) => {
    
    Product.findAll({
        where: {
            seller_id: request.query.seller_id
        }
    }).then(product => {
        if (product == 0) {
            response.status(404);
            response.send('not found seller_id');
        }
        else {
            response.send(product);
        }

    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });

});


//Ver viwes utilizando params para encontrar o id do produto e fizendo incremento views.
app.put('/product/:id/incrementViews', (request, response) => {
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

});
//via query mostra tabela product  ao por o caminho tags 
app.get('/product/tags', (request, response) => {

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


});
//FIM DA PARTE A


//INICIO DA PARTE B
 app.get('/product', (request, response) => {
    //if (request.query.id != undefined) {
    Product.findOne({
        where: {
            id: request.query.id
        }
    }).then(product => {
        response.send(product)
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });
    });
    //}
});
app.delete('/product/:id', (request, response) => {
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
});
// UPDATE IMAGES  use id path to table and update images 
app.put('/product/:id/images', (request, response) => {
    var details = request.body.images;
    Product.update({ images: details }, {
        where: {
            id: request.params.id
        }
    }).then(product => {
        if (request.query.id != undefined) {
            response.status(404);
            response.end("ID not found");
        } else {
            response.send("UPDATE SUCCESEFULL " + details);
        }
    }).catch(err => {
        response.status(404).send({ "ERROR: ": err });

    });
});
 
app.put('/product/', (request, response) => {
    var details = request.query.id;
    var newComment = request.body.comments;
    Product.findOne({
        where: {
            id: details
        }
    }).then(product => {
        console.log(product.comments);

        var comments = JSON.parse(product.comments);
        console.log(comments);
        comments.comments = comments.comments + ", " + newComment;

        Product.update({ "comments": comments.comments }, {
            where: {
                id: details
            }
        }).then(comments => {
            response.send({ "Comentario atualizado: ": comments.comments })
        }).catch(err => {
            response.status(404).send({ "ERROR: ": err });

        });
    });
});
//show tables use path views ASC
app.get('/product/views', (request, response) => {

    Product.findAll({
        order: [
            ['views', 'ASC']
        ],
    }).then(views => {
        response.send({ "views ascendente ": views })
    }).catch(err => {
        response.status(404).send({"ERROR: ": err });
    });
});
//fim da parte B
// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});