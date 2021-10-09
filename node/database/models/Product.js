const {Model, DataTypes} = require('sequelize');
const sequelize = require('../db');

class Product extends Model {}
Product.init({
    name:{
        type: DataTypes.STRING,
        allowNull: false
      },
    valor:DataTypes.DOUBLE,
    peso:DataTypes.FLOAT,
    stock:DataTypes.INTEGER,
    category:DataTypes.STRING,
    descripcion:DataTypes.TEXT
}, {
    sequelize,
    modelName: "Product"
});

module.exports = Product;