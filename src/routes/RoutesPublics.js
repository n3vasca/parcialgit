const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');
const path = require('path');

const RoutesPublics = express.Router();

RoutesPublics.get('/', (req, res) => {
    res.redirect('/login');
});

RoutesPublics.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/login.html'));
});

RoutesPublics.post('/login', AuthController.login);
RoutesPublics.post('/registrar', UserController.createUser);

module.exports = RoutesPublics;
















/* const express = require('express');
const AuthController = require('../controllers/AuthController');
const UserController = require('../controllers/UserController');

const RoutesPublics = express.Router();

RoutesPublics.get('/', (req, res) => {
    return res.send("Servidor Backend está funcionando!");
});
RoutesPublics.post('/login', AuthController.login);
RoutesPublics.post('/registrar', UserController.createUser);

module.exports = RoutesPublics;
*/