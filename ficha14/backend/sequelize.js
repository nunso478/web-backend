// TODO Implement all the models and business logic using sequelize
const Sequelize = require('sequelize');
const PersonModels = require('./models/Person')
const sequelize = new Sequelize('ficha14', 'jose@back-end-mysql', 'Raulandre98', {
    dialect: 'mysql',
    dialectOptions: {
        ssl: {
            require: true
        }
    },
    host:'back-end-mysql.mysql.database.azure.com',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const Person = PersonModels(sequelize, Sequelize)
sequelize.authenticate()
    .then(() => {
        console.log("connection has been estalished");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });
sequelize.sync({ force: false })
    .then(() => {
        console.log("Database & tables created!");
    }).then(function () {
        return Person.findAll();
    }).then(function (persons) {
        console.log(persons);
    });
Person.bulkCreate([
    { firstName: 'Pedro', lastName: 'jardim', profession: 'IT', age: 62 },
    { firstName: 'Manuel', lastName: 'Maltos', profession: 'IT', age: 12 },
    { firstName: 'Maria', lastName: 'Fiqueira', profession: 'IT', age: 32 },
    { firstName: 'Ana', lastName: 'Duarte', profession: 'IT', age: 82 },
    { firstName: 'Luis', lastName: 'Faria', profession: 'IT', age: 42 }
]).then(function () {
    return Person.findAll();
}).then(function (persons) {
    console.log(persons);
})
module.exports = {
    Person
}
