const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

notas.forEach(function (valorItem, indiceItem) {
    somaDasNotas += valorItem;
    console.log("Valor item:" + valorItem, "Indice item: " + indiceItem);
});

console.log("Soma das notas e: " + somaDasNotas);

const media = somaDasNotas / notas.length

console.log(`Media das notas ${media}`);