require('dotenv').config();
const fs = require('fs/promises');
const { send } = require('process');
const { isNumberObject } = require('util/types');
const { id } = require('yup-locales');

const { leituraDeTodasAsNotas } = require('../functions/leituraDeNotas')


const listarTodasAsNotas = async (req, res) => {

    try {
        
        const caminhoPasta = 'C:/Users/Gabriel Luiz/Desktop/Teste - Port Louis/Teste/Notas'
    
        return res.status(200).json(await leituraDeTodasAsNotas(caminhoPasta))

    } catch (error) {
        return res.status(400).json(error.message)
    }
};


const listarNotasPorId = async (req, res) => {

    const { id_pedido, número_item } = req.query;
    
    const caminhoPasta = 'C:/Users/Gabriel Luiz/Desktop/Teste - Port Louis/Teste/Notas'

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