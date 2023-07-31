const nomes = ["Ana", "Cesar", "Joao", "Ana", "Carlos", "Cesar"];

const meuSet = new Set([1,1,2,2,3,4,5,6,6]);
const meuSet1 = new Set(nomes);

const nomesAtualizados = [...meuSet1];

console.log(meuSet);
console.log(meuSet1);
console.log(nomesAtualizados);

//jeito mais dinâmico de executar

const nomesAtualizados1 = [...new Set(nomes)];

console.log(nomesAtualizados1);

