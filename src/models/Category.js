const { DataTypes } = require ("sequelize");
const Connection = require ("../config/Connection");

const Category = Connection.define("Category", {
    nome:{
        type:DataTypes.STRING
    },
    id_categoria_pai:{
        type:DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "categoria"
})

module.exports = Category;