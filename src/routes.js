const { listarTodosOsPedidos } = require('./controllers/pedidos');
const { listarTodasAsNotas, listarNotasPorId } = require('./controllers/notas')

const express = require('express');
const routes = express();

routes.get('/pedidos', listarTodosOsPedidos);
routes.get('/notas', listarTodasAsNotas);
routes.get('/notas/search', listarNotasPorId)

module.exports = routes;