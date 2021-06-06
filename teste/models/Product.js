module.exports = (sequelize, type) => {
    // difinicao do model 
    return sequelize.define('product', {
        //attributes
        id: {
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        seller_id: {
            type: type.INTEGER,
            allowNull: false
        },
        title: {
            type: type.STRING
        },
        description: {
            type: type.STRING
        },
        price: {
            type: type.DECIMAL
        },
        url: {
            type: type.STRING
        },
        views: {
            type: type.INTEGER
        },
        images: {
            type: type.JSON
        },
        comments: {
            type: type.JSON
        },
        tags: {
            type: type.JSON
        }

    });
}
