import chalk from 'chalk';  //Não é nativa do JS
import fs from 'fs';        //Nativa do JS

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        console.log(chalk.green(texto))})
}

pegaArquivo('./arquivos/texto.md');


