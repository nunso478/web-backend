//importar o express
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
app.use(express.urlencoded({extended:false}));
app.use('/api-docs',swaggerUi.serve,swaggerUi.setup(swaggerJSDoc));

const sequelize = new Sequelize('ficha9','root','',{
    dialect:'mysql'
});
sequelize.authenticate()
    .then(() => {
        console.log("connection has been estalished");
    })
    .catch(err =>{
        console.log("Unable to connect",err);
    });
//criar peron na parte sequelize
const person = sequelize.define('person',{
    //attributes
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING
    },
    profession:{
        type: Sequelize.STRING
    },
    age:{
        type: Sequelize.INTEGER
    }
});
// 
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    }).then(function() {
        return person.findAll();
    }).then(function(persons){
        console.log(persons);
    });
//
person.bulkCreate([
    {firstName:'Pedro',lastName:'jardim',profession:'IT',age:62},
    {firstName:'Manuel',lastName:'Maltos',profession:'IT',age:12},
    {firstName:'Maria',lastName:'Fiqueira',profession:'IT',age:32},
    {firstName:'Ana',lastName:'Duarte',profession:'IT',age:82},
    {firstName:'Luis',lastName:'Faria',profession:'IT',age:42}
]).then(function() {
    return person.findAll();
}).then(function(persons) {
    console.log(persons);
});
//moastra lista de todas a pessoas 
app.get('/person',(request,response)=>{
    person.findAll().then(person => {
        response.send(person)
});
  
});
app.post('/person',(request,response)=>{
    var details = request.body;
    person.create(details).then(person => {
        response.send(person.id)
});
});



// metodo que arranca o servidor http e fica a escuta
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);

});