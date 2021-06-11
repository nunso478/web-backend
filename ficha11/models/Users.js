module.exports = (sequelize, type) => {
    // difinicao do model 
    return sequelize.define('users', {
        //attributes
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        password: type.STRING,
        email: type.STRING

    });
}
