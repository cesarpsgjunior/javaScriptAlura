import chalk from 'chalk';  //Não é nativa do JS
import fs from 'fs';        //Nativa do JS

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo'));
}

function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        if (erro) {
            trataErro(erro);
        } else {
            console.log(chalk.green(texto));
        }
        
})
}

pegaArquivo('./arquivos/');


