const notas = [10,7,8,9];

//Atribuição direta não insere dados no array somente com tipo primitivos

const novasNotas = notas;

novasNotas.push(9);

console.log(`Novas notas são: ${novasNotas}`);
console.log(`Notas originais: ${notas}`);

//Jeito correto de fazer

const novasNotas1 = [...notas];

novasNotas1.push(6);

console.log(`Novas notas são: ${novasNotas}`);
console.log(`Notas originais: ${notas}`);
console.log(`Notas novas 1: ${novasNotas1}`);

//ainda pode ser feito da seguinte forma

const novasNotas2 = [5,...novasNotas1, 4,8];

console.log(`Notas novas 2: ${novasNotas2}`);