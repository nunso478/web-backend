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
//

// instanciar o express
const app = express()
// definir a porta do servidor http
const port = 3000

//funçoes midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc));

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
//criar peron na parte sequelize
const person = sequelize.define('person', {
    //attributes
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING
    },
    profession: {
        type: Sequelize.STRING
    },
    age: {
        type: Sequelize.INTEGER
    }
});
// 
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    }).then(function () {
        return person.findAll();
    }).then(function (persons) {
        console.log(persons);
    });
//
/*person.bulkCreate([
    {firstName:'Pedro',lastName:'jardim',profession:'IT',age:62},
    {firstName:'Manuel',lastName:'Maltos',profession:'IT',age:12},
    {firstName:'Maria',lastName:'Fiqueira',profession:'IT',age:32},
    {firstName:'Ana',lastName:'Duarte',profession:'IT',age:82},
    {firstName:'Luis',lastName:'Faria',profession:'IT',age:42}
]).then(function() {
    return person.findAll();
}).then(function(persons) {
    console.log(persons);
});*/

//moastra lista de todas a pessoas 
app.get('/person', (request, response) => {

    //var user = request.query.user;

    person.findAll().then(person => {
        response.send(person)
    });

});
app.post('/person', (request, response) => {
    var details = request.body;
    person.create(details).then(person => {
        if (!person) {
            response.status(404).send({ error: 'No user' });
        }
        response.status(200).send("Inserted id: " + person.id);
    });
});
// delete everyone use ID 
app.delete('/person', (request, response) => {

    person.destroy({
        where: {
            id: request.body.id
        }
    }).then(count => {
        if (!count) {
            response.status(404).send({ error: 'No user' });
        }
        response.send("deleted: " + count);
    });
});
// delete everyone no /person/:id
app.delete('/person/:id', (request, response) => {

    person.destroy({
        where: {
            id: request.params.id
        }
    }).then(count => {
        response.send("deleted: " + count);
        //catch  verifica o erro
    }).catch(err => {
        response.status(404).send(err);
    });
});
//moastra lista pelo id usar params.id 
app.get('/person/:id', (request, response) => {
    person.findAll({
        where: {
            id: request.params.id
        }
    }).then(person => {
        response.send(person)
    }).catch(err => {
        response.status(404).send("Not found: " + err);

    });

});

//body-> request.body
//Params -> request.params
//Query -> request.query exemplo person?user = test

// listar pelo params age e profession
app.get('/person/:age/:profession', (request, response) => {
    person.findAll({
        where: {
            age: request.params.age,
            profession: request.params.profession
        }
    }).then(person => {
        response.send(person)
    }).catch(err => {
        response.status(404).send("Not found: " + err);

    });

});
app.put('/person/:id', (request, response) => {
    person.update({
        where: {
            age: request.params.age,
            profession: request.params.profession
        }
    }).then(person => {
        response.send(person)
    }).catch(err => {
        response.status(404).send("Not found: " + err);

    });

});

// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});