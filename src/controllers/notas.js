require('dotenv').config();
const fs = require('fs/promises');

const { leituraDeTodasAsNotas } = require('../functions/leituraDeNotas')


const listarTodasAsNotas = async (req, res) => {

    try {
        
        const caminhoPasta = process.env.CAMINHO_PASTA_NOTAS;
    
        return res.status(200).json(await leituraDeTodasAsNotas(caminhoPasta))

    } catch (error) {
        return res.status(400).json(error.message)
    }
};

const listarNotasPorId = async (req, res) => {

    const { id_pedido, número_item } = req.query;
    
    const caminhoPasta = process.env.CAMINHO_PASTA_NOTAS;

    try {
        const dados = await leituraDeTodasAsNotas(caminhoPasta);
        if(!dados){
            return res.status(400).json("erro")
        }

        let objeto = [];

        const mensagem = "Não há itens correspondentes à busca."

            for( let array of dados){
                for (let obj of array){

                    if(obj.id_pedido == id_pedido && obj.número_item == número_item){
                        objeto.push(obj)
                    }else{
                        
                    }
                }
            }

        if(objeto.length === 0){
            return res.status(400).json(mensagem)
        }else{
            return res.status(200).json(objeto)
        }
    
    } catch (error) {
        return res.status(400).json(error.message)
    }

}

module.exports = {
    listarTodasAsNotas,
    listarNotasPorId
};