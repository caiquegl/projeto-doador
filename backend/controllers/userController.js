const {usuarios} = require('../models');

module.exports = {
    async store(req,res){
        const {nome, email, telefone} = req.body;

        await usuarios.create({
            nome,
            email,
            telefone,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.send('cadastrado com sucesso!')
    },

    async list(req,res){
        const listUsers = await usuarios.findAll();

        res.send(listUsers);
    }
};