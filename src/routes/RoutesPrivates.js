const express = require('express');
const authMiddleware = require("../middlewares/authmiddlewares");
const UserController = require('../controllers/UserController');
const ProductController = require("../controllers/ProductsController")

const RoutesPrivates = express.Router();

RoutesPrivates.use(authMiddleware);

RoutesPrivates.get('/usuarios', UserController.getAll);
RoutesPrivates.post("/usuarios", UserController.createUser);
RoutesPrivates.use('/produtos', ProductController.createProduct);
// Só adicionar as outras rotas de acordo com as páginas que forem criadas

module.exports = RoutesPrivates;
