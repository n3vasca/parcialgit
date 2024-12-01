const { DataTypes } = require ("sequelize");
const Connection = require ("../config/Connection");
const Category = require('./Category');

const ProductModel = Connection.define("Product",
    {
        nome:{
            type:DataTypes.STRING,
            allowNull: false
        },
        descricao:{
            type:DataTypes.STRING,
            allowNull: false
        },
        valor:{
            type:DataTypes.DECIMAL(15,2),
            allowNull: false,
        },
        custo:{
            type:DataTypes.DECIMAL(15,2),
            allowNull: false
        },
        quantidade:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        codigo:{
            type:DataTypes.INTEGER,
            allowNull: false
        },
        id_categoria:{
            type:DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: Category,
                key: "id"
            }
        }
},{
    tableName: "produtos"
});

module.exports = ProductModel;