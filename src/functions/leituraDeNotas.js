require('dotenv').config();
const fs = require('fs/promises');


async function leituraDeTodasAsNotas (caminhoPasta) {

    try {
        const pasta = await fs.readdir(caminhoPasta);

        let conteudo = [];
        let newConteudo = []

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
            newConteudo.push(novoArray)
        };

        return newConteudo;

    } catch (error) {
        console.log(error.message)
    }
};

module.exports = {
    leituraDeTodasAsNotas
};