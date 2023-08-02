const clientes = require("./001-clientes.json");

//console.log(clientes);

function encontrar(lista, chave, valor){
    //return lista.find((item) => item[chave] === valor); //Serve quando não for um array dentro de um objeto
    return lista.find((item) => item[chave].includes(valor));
}

const encontrado = encontrar(clientes, "telefone", "1918820860");

console.log(encontrado);