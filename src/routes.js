const { listarTodosOsPedidos } = require('./controllers/pedidos');
const { listarTodasAsNotas } = require('./controllers/notas')

const express = require('express');
const routes = express();

routes.get('/pedidos', listarTodosOsPedidos);
routes.get('/notas', listarTodasAsNotas);

module.exports = routes;