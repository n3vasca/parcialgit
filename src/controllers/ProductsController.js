const ProductModel = require('../models/Products');

const getAll = async (req, res) => {
  try {
    const product = await ProductModel.findAll();
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getProductById = async (req, res) => {
  const { id } = req.params; 
  try {
      const product = await ProductModel.findByPk(id); 
      if (!product) {
          return res.status(404).json({ message: 'Produto não encontrado!' });
      }
      res.status(200).json(product);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const createProduct = async (req, res) => {
  try {
    const newProduct = await ProductModel.create({ ...req.body }); 
    res.status(201).json({ message: 'Produto criado com sucesso!', newProduct });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const updateProduct = async (req, res) => {
  const { id } = req.params; 
  try {
      const [updated] = await ProductModel.update(
          { ...req.body },  
          { where: { id } }
      );
      if (!updated) {
          return res.status(404).json({ message: 'Produto não encontrado' });
      }
      const updatedProduct = await ProductModel.findByPk(id);
      res.status(200).json({ message: 'Produto atualizado com sucesso!', updatedProduct });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};


const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
      const deletedProduct = await ProductModel.destroy({
          where: { id: id }
      });
      if (!deletedProduct) {
          return res.status(404).json({ message: 'Produto não encontrado!' });
      }
      res.status(200).json({ message: 'Produto excluído com sucesso!' });
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAll,
  createProduct,
  deleteProduct,
  getProductById,
  updateProduct,
};