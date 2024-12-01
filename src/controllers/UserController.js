const User = require('../models/UserModel');

const getAll = async (req, res) => {
  try {
    const users = await User.findAll();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params; 
  try {
      const user = await User.findByPk(id); 
      if (!user) {
          return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
      res.status(200).json(user);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const createUser = async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body }); 
    res.status(201).json({ message: 'Usuário criado com sucesso!', newUser });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};



const updateUser = async (req, res) => {
  const { id } = req.params; 
  try {
      const [updated] = await User.update(
          { ...req.body },  
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Usuário não encontrado' });
      }
      const updatedUser = await User.findByPk(id);
      res.status(200).json({ message: 'Usuário atualizado com sucesso!', updatedUser });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const deleteUser = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedUser = await User.destroy({
          where: { id: id }
      });
      if (!deletedUser) {
          return res.status(404).json({ message: 'Usuário não encontrado!' });
      }
      res.status(200).json({ message: 'Usuário excluído com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  createUser,
  deleteUser,
  getUserById,
  updateUser,
};