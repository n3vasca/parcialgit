const UserModel = require('../models/UserModel');
const jwt = require('jsonwebtoken');

class AuthController {
    async login(request, response) {
        try {
            const { login, senha } = request.body;

            const user = await UserModel.findOne({
                where: {
                    email: login,
                    senha: senha
                }
            });

            if(user) {
                const data = {
                    login: login,
                }

                const token = jwt.sign(data, 'sousa1234');
                return response.status(200).json({
                    message: 'Login realizado com sucesso',
                    token: token
                })
            }
            return response.status(500).json({
                message: 'Login ou senha incorreto'
            })
        } catch(e) {
            console.log(e)
            return response.status(500).json({ error: 'Ocorreu um erro ao listar usuários.' });
        }
    }
}

module.exports = new AuthController();