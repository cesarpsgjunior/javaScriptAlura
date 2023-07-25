import chalk from 'chalk';  //Não é nativa do JS
import fs from 'fs';        //Nativa do JS

function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo'));
}

//Metodo utilizando async / await

async function pegaArquivo(caminhoDoArquivo){
    const encoding = 'utf-8';
    const texto = await fs.promises.readFile
    (caminhoDoArquivo, encoding)
    console.log(texto);
}




//Método assincrono de execução da função nativo JS promises.readFile

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto)) => console.log(chalk.green(texto))
//     .catch(trataErro)

// }

//Método sincrono de execução 

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//         if (erro) {
//             trataErro(erro);
//         } else {
//             console.log(chalk.green(texto));
//         }
        
// })
// }

pegaArquivo('./arquivos/');


