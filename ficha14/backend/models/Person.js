module.exports = (sequelize, type) => {
    // difinicao do model 
    return sequelize.define('persons', {
        //attributes
        firstName: type.STRING,
        lastName: type.STRING,
        profession: type.STRING,
        age: type.INTEGER
    });
}


