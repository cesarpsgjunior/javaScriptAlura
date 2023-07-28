import chalk from 'chalk';  //Não é nativa do JS
import fs from 'fs';        //Nativa do JS


function extraiLinks(texto) {
    const regex = /\[([^[\]]*)?\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({[captura[1]]: captura[2]}))
    return resultados;
}   


function trataErro(erro){
    console.log(erro);
    throw new Error(chalk.red(erro.code, 'Não há arquivo'));
}

//Metodo utilizando async / await

async function pegaArquivo(caminhoDoArquivo){
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile
        (caminhoDoArquivo, encoding)
        console.log(extraiLinks(texto));
    } catch(erro) {
        trataErro(erro);
    } finally {
        console.log(chalk.yellow("Fim do programa"));
    }

}

// pegaArquivo('./arquivos/texto.md')

// Expressões regulares

// \[([^[\]]*)?\]\((https?:\/\/[^\s?#.].[^\s]*)\)







//Método assincrono de execução da função nativo JS promises.readFile

// function pegaArquivo(caminhoDoArquivo){
//     const encoding = 'utf-8';
//     fs.promises
//     .readFile(caminhoDoArquivo, encoding)
//     .then((texto) => console.log(chalk.green(texto)))
//     .catch(trataErro)

// }

//Método sincrono de execução 

// 


// function promessa(bool) {
//     const x = bool;
//     return new Promise((resolve, reject) => {
//       if (!x) {
//         reject(new Error("falha na promessa"));
//       }
//       resolve("sucesso na promessa");
//     });
//    }
   
//    function exibeResposta(textoResult) {
//     console.log(textoResult);
//    }
   
//    promessa(true)
//     .then((texto) => exibeResposta(texto))
   // sucesso na promessa


pegaArquivo('./arquivos/texto.md')