//importar o express
const { error } = require('console');
const { json, response } = require('express');
const express = require('express');
const fs = require("fs");
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
const product = sequelize.define('product', {
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
        return product.findAll();
    }).then(function (products) {
        console.log(products);
    }).then(function () {
        return product.findOne();
    });

//Insert multiple instances in bulk
/*product.bulkCreate([
    {seller_id:"1",title:"LG",description:"LG G1 65 inch 4K",price:2999,url:"https://www.lg.com/a",views:4000,images:" ",comments:"",tags:""},
    {seller_id:"2",title:"Samsung",description:"65” QN900A Samsung Neo QLED 8K",price:4999,url:"https://www.samsung.com/",views:10000,images:" ",comments:"",tags:""},
    {seller_id:"3",title:"LG",description:"LG C1 77 inch 4K",price:2799,url:"https://www.lg.com/",views:9000,images:" ",comments:"",tags:""},
    {seller_id:"4",title:"Samsung",description:"50 Class TU8000 Crystal UHD 4K",price:469,url:"https://www.samsung.com/",views:20000,images:" ",comments:"",tags:""}
    
]).then(function() {
    return product.findAll();
}).then(function(products) {
    console.log(products);
});*/

//show list  all table Product 
app.get('/product', (request, response) => {

    //var user = request.query.user;
    product.findAll().then(product => {
        response.send(product)
    });

});


// Insert table product use post
app.post('/product', (request, response) => {
    var details = request.body;
    product.create(details).then(product => {
        response.status(200).send("Inserted id: " + product.id);
    });
});
//via query mostra tabela product  ao por o caminho seller_id por numero 
app.get('/product?seller_id=', (request, response) => {
    product.findAll({
        where: {
            seller_id: request.query.seller_id
        }
    }).then(product => {
        response.send(product)
    });

});
app.put('/product/:views', (request, response) => {
    person.update({ where: {
        views: request.params.views,
        
    }},{ }).then(person => {
        response.send(person)
    }).catch(err => {
        response.status(404).send("Not found: " + err);

    });

});
//via query mostra tabela product  ao por o caminho tags 
app.get('/product?tags=', (request, response) => {
    product.findAll({
        where: {
            tags: request.query.tags
        }
    }).then(product => {
        response.send(product)
    });

});



// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});