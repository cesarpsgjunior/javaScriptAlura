const cliente = {
    nome: "Cesar",
    idade: 22,
    email: "Nome@email.com",
    telefone: ["1222112211", "112244455"]
};


cliente.enderecos = [
    {
        rua: "R: Joseph Climber",
        numero: 1344,
        apartamento: true,
        complemento: "Ap 314"
    },
];

//acessando  de forma direta sem espalhamento
function ligaParaCliente(telefoneComercial, telefoneResidencial) {
    console.log(`Ligado para ${telefoneComercial} e para ${telefoneResidencial}`);
}

ligaParaCliente(cliente.telefone[0], cliente.telefone[1]);

//Utilizando espalhamento
ligaParaCliente(...cliente.telefone);


//Utilizando espalhamento para objetos spread operator

const encomenda = {
    destinatario: cliente.nome,
    contato: cliente.email,
    ...cliente.enderecos[0],
};

console.log(encomenda);