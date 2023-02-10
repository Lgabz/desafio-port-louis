require('dotenv').config();
const fs = require('fs/promises');
const { array } = require('yup');
const objetoNotasSchema = require('../validations/objetoNotasSchema')


async function leituraDeTodasAsNotas (caminhoPasta) {

    try {
        const pasta = await fs.readdir(caminhoPasta);

        let conteudo = [];
        let conteudoArrayJSON = []

            for(let arquivo of pasta){

                const arquivos = await (await fs.readFile(`${caminhoPasta}/${arquivo}`, 'utf-8'))
                .trim().split("\r\n");
                conteudo.push(arquivos);

            };

        for(let item of conteudo){

            let novoArray = [];

            for (let subItem of item){
                let obj= JSON.parse(subItem);
                novoArray.push(obj);

            };
            conteudoArrayJSON.push(novoArray)
        };

//valida formato do objeto     
        for (let array of conteudoArrayJSON){

            for (let objeto of array){ 
                
                const numeroItemTipoNumber = Math.round(Number.parseInt(objeto["número_item"]));
                const quantidadeProdutoTipoNumber = Math.round(Number.parseInt(objeto.quantidade_produto));

                objeto["número_item"] = numeroItemTipoNumber
                objeto.quantidade_produto = quantidadeProdutoTipoNumber

                 await objetoNotasSchema.validate(objeto);
             }
         };

        return conteudoArrayJSON;

    } catch (error) {
        return error.message
    }
};


module.exports = {
    leituraDeTodasAsNotas
};