const Sequelize = require('sequelize');
const ProductModels = require('./models/Product')
const sequelize = new Sequelize('ficha10', 'root', '', {
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 10,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
const Product = ProductModels(sequelize, Sequelize)
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
    Product
}
