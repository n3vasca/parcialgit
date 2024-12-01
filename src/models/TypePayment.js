const { DataTypes } = require('sequelize');
const Connection = require('../config/Connection')

const TypePayment = Connection.define(
    'TypePayment',
    {
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: 'tipo_pagamento',
    }
)

module.exports = TypePayment;