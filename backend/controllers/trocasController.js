const {trocas} = require('../models');
const {itensTrocas} = require('../models');


module.exports = {
    async store(req,res){
        const {idDoador, idReceptor, status, idITem} = req.body;

        await trocas.create({
            idDoador,
            idReceptor,
            status,
            createdAt: new Date(),
            updatedAt: new Date(),
        });

      

        res.send('cadastrado com sucesso!')
    },

    async list(req,res){
        const listTrocas = await trocas.findAll();

        res.send(listTrocas);
    },
   
}