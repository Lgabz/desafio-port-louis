require('dotenv').config();
const fs = require('fs/promises');
const { array } = require('yup');
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
//transforma dados em objetos e os insere em arrays
        for(let item of conteudo){

            let novoArray = [];

            for (let subItem of item){
                let obj= JSON.parse(subItem);
                novoArray.push(obj);

            };
            conteudoArrayJSON.push(novoArray)
        };
        
//valida formato do valor_unitário_produto com casas decimais      
        for (let array of conteudoArrayJSON){

           for (let objeto of array){ 
               
                let valorUnitario = objeto["valor_unitário_produto"].replace(",",".");
                const valorUnitarioDecimal = Number.parseFloat(valorUnitario)
                objeto["valor_unitário_produto"] = valorUnitarioDecimal
                
                await objetoPedidosSchema.validate(objeto);
                objeto["valor_unitário_produto"] = valorUnitarioDecimal.toFixed(2).replace(".",",");
            }
        };
//organiza em ordem crescente
        for (let array of conteudoArrayJSON){
            
           array.sort((a, b) => a.número_item - b.número_item);
        }
//validação de Número_item faltando
        for (let array of conteudoArrayJSON){
 
            let comparacao = 1;

            for (let objeto of array){
                let number = parseInt(objeto["número_item"])
                
                let resultado = (number - comparacao);
                
                
                if (resultado === 1 || resultado === 0){ 
                                       
                }else{

                    let a = conteudoArrayJSON.indexOf(array)
                    let mensagem = `número_item ${number-1} deve ser informado no Pedido ${a+1}.`;
                    
                    return mensagem;
                }
                comparacao = number
            }
        }
 
        for(let array of conteudoArrayJSON){
            let item = 0
            for (let objeto of array) {
                if (objeto["número_item"] !== item){
                    item = objeto["número_item"];
                }else{
                    let a = conteudoArrayJSON.indexOf(array)
                    let mensagem = `número_item ${objeto["número_item"]} repetido em Pedido ${a+1}.`;
                    
                    return(mensagem)
                }
            }
        }
//validação de itens repetidos
        return conteudoArrayJSON;
    } catch (error) {
        
        return error.message
    }

};



module.exports = {
    leituraDeTodosOsPedidos
};