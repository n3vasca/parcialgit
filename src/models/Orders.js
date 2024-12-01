const { DataTypes } = require("sequelize");
const Connection = require("../config/Connection");
const UserModel = require("./UserModel");
const TypePayment = require("./TypePayment");
const Transactions = require("./Transactions");

const Orders = Connection.define(
  "Orders",
  {
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    data_pedido: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    total: {
      type: DataTypes.DECIMAL(15, 2),
      allowNull: false,
    },
    status_pedido: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id_usuario: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: UserModel,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    id_tipo_pagamento: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TypePayment,
        key: "id",
      },
      onDelete: "SET NULL",
    },
    id_transacao: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Transactions,
        key: "id",
      },
      onDelete: "CASCADE",
    },
    data_conclusao: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
  },
  {
    tableName: "pedido",
  }
);

module.exports = Orders;