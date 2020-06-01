const express = require('express');

const routes = express.Router();

const userController = require('../controllers/userController');
const itensController = require('../controllers/itensController');
const trocasController = require('../controllers/trocasController');



routes.get('/users', userController.list);
routes.post('/users', userController.store);

routes.get('/itens', itensController.list);
routes.post('/itens', itensController.store);

routes.get('/trocas', trocasController.list);
routes.post('/trocas', trocasController.store);

module.exports = routes;