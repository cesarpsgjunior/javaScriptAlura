//Jeito clássico ou declarativo
// function minhaFuncao(){
//     //Bloco de código
// }

// minhaFuncao("parametro");

// Expressão de função - Não há um nome para a função

// const soma = function(num1, num2) {return num1 + num2};
// console.log(soma(1,2));

//Diferença principal

console.log(apresentar()); //é possível chamar a função antes de sua declarção

function apresentar() {
    return "olá";
}

console.log(soma(1,2));
const soma = function(num1, num2) {return num1 + num2}; //Não irá funcionar, pois não tem a declaração da variável antes



