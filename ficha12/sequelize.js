// TODO Implement all the models and business logic using sequelize
const Sequelize = require('sequelize');
const UserModels = require('./models/Users')
//CONNECTION pool
const sequelize = new Sequelize(process.env.DB_SCHEMA, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const Users = UserModels(sequelize, Sequelize)
sequelize.authenticate()
    .then(() => {
        console.log("connection has been estalished");
    })
    .catch(err => {
        console.log("Unable to connect", err);
    });
sequelize.sync({ force: false })
    .then(() => {
        console.log("Tables Created");
    })
module.exports = {
    Users
}
