//== Comparação implicita ou === comparação explicita

const numero = 5;
const texto = "5"

console.log(numero == texto); //Comparação implicita só valor

console.log(numero === texto); //Comparação explicita - valor e tipo

//typeof

console.log(typeof(numero));
console.log(typeof(texto));

//Boas práticas é utilizar o ===
//Se necessáric utilizar Number() ou toString()


//Operadores ternários

const idadeMinima = 18;
let cliente = 18;

//Metodo com if
if(cliente < idadeMinima){
    console.log("Não é permitido!");
}else {
    console.log("Liberado")
}

//Metodo com ternario usado em operações curtas
console.log(cliente < idadeMinima ? "Não é permitido!" : "Liberado");



