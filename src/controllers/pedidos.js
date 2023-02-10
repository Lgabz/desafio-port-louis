require('dotenv').config();
const fs = require('fs/promises');

const { leituraDeTodosOsPedidos } = require('../functions/leituraDePedidos')


const listarTodosOsPedidos = async (req, res) => {

    try {
        
        const caminhoPasta = process.env.CAMINHO_PASTA_PEDIDOS;
    
        return res.status(200).json(await leituraDeTodosOsPedidos(caminhoPasta))

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

module.exports = {
    listarTodosOsPedidos
};