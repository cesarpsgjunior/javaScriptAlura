//Segundo arquivo acessando as propriedades com .

const cliente = {
    nome: "Cesar",
    idade: 49,
    cpf: "11122233344455",
    email: "seuemail@gmail.com"
}

console.log(cliente["cpf"]);

console.log(` o nome do cliente é ${cliente.nome} e sua idade é ${cliente.idade}`);

// for(let i = 0; i < cliente.cpf.length; i++){
//    console.log(`Os digitos do cpf são ${cliente.cpf.substring(i, 14)}`);
// }