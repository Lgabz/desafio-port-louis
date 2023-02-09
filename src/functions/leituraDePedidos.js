require('dotenv').config();
const fs = require('fs/promises');
const objetoPedidosSchema = require('../validations/objetoPedidosSchema');


async function leituraDeTodosOsPedidos (caminhoPasta) {

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
        
        
        for (let array of conteudoArrayJSON){

           for (let objeto of array){ 
               
                let valorUnitario = objeto["valor_unitário_produto"].replace(",",".");
                const valorUnitarioDecimal = Number.parseFloat(valorUnitario)
                objeto["valor_unitário_produto"] = valorUnitarioDecimal
                
                await objetoPedidosSchema.validate(objeto);
                objeto["valor_unitário_produto"] = valorUnitarioDecimal.toFixed(2).replace(".",",");
            }
        };

        for (let array of conteudoArrayJSON){
            
           array.sort((a, b) => a.número_item - b.número_item)

        }


        return conteudoArrayJSON;
    } catch (error) {
        console.log(error.message)
        return error.message
    }
};



module.exports = {
    leituraDeTodosOsPedidos
};