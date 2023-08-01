const cliente = {
    nome: "Cesar",
    idade: 22,
    email: "Nome@email.com",
    telefone: ["1222112211", "112244455"]
};

//Adicionando propriedade por fora

cliente.endereco = {
    rua: "R: Joseph Climber",
    numero: 1344,
    apartamento: true,
    complemento: "Ap 314"
};


console.log(cliente);

//Formas de exibir cliente
console.log(cliente["endereco"]); //Mostra todo o conjunto
//Mostra um item especifico
console.log(`O numero do apto e: ${cliente.endereco.numero}`);
console.log("O endereco e: " + cliente.endereco.rua)
console.log("O complemento e: " + cliente.endereco["complemento"]);