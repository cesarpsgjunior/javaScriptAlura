const cliente = {
    nome: "Cesar",
    idade: 22,
    email: "Nome@email.com",
    telefone: ["1222112211", "112244455"]
};

//Criando um array como objeto para inserção de novos dados

cliente.enderecos = [
    {
        rua: "R: Joseph Climber",
        numero: 1344,
        apartamento: true,
        complemento: "Ap 314"
    },
];

cliente.enderecos.push(
    {
        rua: "Rod aristeu vieira vilela",
        numero: 797,
        apartamento: false,
        complemento: "prox crematorio" 
    }
    );


console.log(cliente.enderecos);


const listaApenasApartamentos = cliente.enderecos.filter(
    (endereco) => endereco.apartamento === true
);

const listaNumerosPares = cliente.enderecos.filter(
    (casa) => casa.numero === 797
);

console.log(listaApenasApartamentos);
console.log(listaNumerosPares);


//Formas de exibir cliente
//console.log(cliente["enderecos"]); //Mostra todo o conjunto
//Mostra um item especifico
//console.log(`O numero do apto e: ${cliente.enderecos.numero}`);
//console.log("O endereco e: " + cliente.enderecos.rua)
//console.log("O complemento e: " + cliente.enderecos["complemento"]);