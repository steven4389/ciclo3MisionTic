const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Product extends Model {}
Product.init({
    name:DataTypes.STRING,
    valor:DataTypes.DOUBLE,
    peso:DataTypes.FLOAT,
    stock:DataTypes.INTEGER,
    caterory:DataTypes.STRING,
    descripcion:DataTypes.TEXT
}, {
    sequelize,
    modelName: "Product"
});

module.exports = Product;