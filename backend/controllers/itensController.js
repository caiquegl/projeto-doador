const {itens} = require('../models');

module.exports = {
    async store(req,res){
        const {nome, descricao} = req.body;

        await itens.create({
            nome,
            descricao,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

        res.send('cadastrado com sucesso!')
    },

    async list(req,res){
        const listItens = await itens.findAll();

        res.send(listItens);
    }
}