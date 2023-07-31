const nomes = ["Joao", "Maria", "Bruxa"];

//Há três formas de se utilizar o forEach

//Diretamente com uma chamada de função

nomes.forEach (function (nome){
    console.log(nome);
})

//Através de uma aeroFunction =>

nomes.forEach((nome) => {
    console.log(nome);
})

//Através da chamada de uma função externa

nomes.forEach(imprimeNomes);

function imprimeNomes(nome){
    console.log(nome);
}

