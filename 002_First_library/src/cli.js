import pegaArquivo from './index.js';
import chalk from 'chalk';
import fs from 'fs';
import listaValidada from './http-validacao.js';
import fetch from 'node-fetch';

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = ''){
    if(valida) {
        console.log(
            chalk.yellow(`Lista validada : ${JSON.stringify(await listaValidada(resultado))}`),
            chalk.black.bgGreen(identificador));
    } else {
        console.log(
            chalk.yellow(`Lista de links : ${JSON.stringify(resultado)}`),
            chalk.black.bgGreen(identificador));
    
    }
        
    }

async function processaTexto(argumentos){

    console.clear();
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';
   
    try {
        fs.lstatSync(caminho);
    } catch (erro) {
        if(erro.code === 'ENOENT') {
            console.log('Arquivo ou diretorio não existe');
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida, resultado);
        
    }else if (fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida, lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);
