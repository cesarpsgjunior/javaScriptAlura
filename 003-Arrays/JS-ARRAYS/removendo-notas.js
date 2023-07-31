console.log('Removendo nota adicionada acidentalmente');

notas = [10, 6, 8, 5.5, 7];
console.log(notas[4]);
notas.pop();
console.log(notas[4]);
const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(`A media é:  ${media}`);


