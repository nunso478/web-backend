const Sequelize = require('sequelize');
const ProductModels = require('./models/Product')
const sequelize = new Sequelize(process.env.DB_SCHEMA,process.env.DB_USER,process.env.DB_PASS, {
    dialect: 'mysql',
    host: process.env.DB_HOST,
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
