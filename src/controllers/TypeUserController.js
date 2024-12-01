const TypeUserModel = require("../models/TypeUserModel")

const createTypeUser= async (req, res) => {
    const { nome, } = req.body;
    try {
      const newTypeUser = await TypeUserModel.create({
        nome
      });
      res.status(201).json({ message: 'Tipo de usuário criado com sucesso!', newTypeUser });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  };

  module.exports = {
    createTypeUser
  }
  