//tipo de dado booleanos

//conversao implicita

const numero = 456;
const numeroString = "456";

// === iguais converte e compara
console.log(numero === numeroString);

// == dois iguais apenas comparam
console.log(numero == numeroString);
console.log(numero + numeroString);

//Conversao explicita
//Number() - converte string em numero
//String() - converte numero em string

console.log(numero + Number(numeroString));

//Outros exemplos de conversões

//Numero para string
let telefone = 12313266;
console.log("O telefone é " + String(telefone));

let phone = 12341335;
console.log("O telefone é " + telefone.toString());

let numero1 = "123456";
console.log(+ numero1 * 2);

//Booleano para número
let usuarioConectado = true;
console.log("Usuario esta conectado: " + usuarioConectado.toString());
console.log("Usuario esta conectado: " + Number(usuarioConectado));






 