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

const chavesDoObjeto = Object.keys(cliente);

console.log(chavesDoObjeto);

if(!chavesDoObjeto.includes("enderecos")) {
    console.error("Erro => é necessáio um endereço cadastrado");
}