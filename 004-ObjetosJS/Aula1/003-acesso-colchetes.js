//Acessado os dados com colchetes


const cliente = {
    nome: "Cesar",
    idade: 49,
    cpf: "11122233344455",
    email: "seuemail@gmail.com"
}

console.log(` o nome do cliente é ${cliente["nome"]} e sua idade é ${cliente["idade"]}`);


//Se não souber qual a chave?

const chaves = ["nome", "idade", "cpf", "email"];

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem valor ${cliente[chave]}`);
});