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

for (let chave in cliente) {
    let tipo = typeof cliente[chave];
    if (tipo !== "object" && tipo !== "function")
    {
        console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
    }
}