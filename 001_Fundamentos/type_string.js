const texto1 = "Ola mundo";
const texto2 = 'Ola mundo';
const senha = 'senhaSuperSegura1!!';
const citacao = 'Disse "oi"';
const meuNome = "Cesar";
const idade = 11

//Concatenação utiizar o +

const texto3 = "Meu nome é: "
console.log(texto3 + meuNome + idade);

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log("cifrão " + cifrao)
console.log("A maiusculo " + aMaiusculo)
console.log("Simbolo tique: " + tique)
console.log("Hiragana " + hiragana)

//const cidade = "belo horizonte";
//const input = "Belo Horizonte";

//console.log(cidade === input); // false

const cidade = "belo horizonte";
const input = "Belo Horizonte";

const inputMinusculo = input.toLowerCase();

console.log(cidade === inputMinusculo); // true

console.log(senha.length);