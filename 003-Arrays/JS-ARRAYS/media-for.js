const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
let media = 0;

for (let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i];
}

media = somaDasNotas / notas.length;
console.log(`A media dos alunos e ${media}`);

const notas1 = [10 , 6.5, 8 ,7.5]
const notas2 = [9  , 6  , 6]
const notas3 = [8.5, 9.5]

const notasGerais = [notas1,notas2,notas3]

for (let i = 0; i < notasGerais.length; i++){
    for( let j = 0; j < notasGerais[i].length; j++){
        media += notasGerais[i][j] / notasGerais[i].length;
        console.log("Nota em analise: " + notasGerais[i][j]);
        if(i < notasGerais.length){
            console.log(`Media parcial: ${media/notasGerais.length}`);
        }
    }
}
media = media/notasGerais.length;

console.log(`A media final dos alunos e ${media}`);