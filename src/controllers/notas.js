require('dotenv').config();
const fs = require('fs/promises');

const { leituraDeTodasAsNotas } = require('../functions/leituraDeNotas')


const listarTodasAsNotas = async (req, res) => {

    try {
        
        const caminhoPasta = 'C:/Users/Gabriel Luiz/Desktop/Teste - Port Louis/Teste/Notas'
    
        return res.status(200).json(await leituraDeTodasAsNotas(caminhoPasta))

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

module.exports = {
    listarTodasAsNotas
};