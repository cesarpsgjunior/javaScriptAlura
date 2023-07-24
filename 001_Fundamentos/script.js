//CTRL + K + C => comenta bloco de linhas
//Declaração de variável com VAR

// var altura = 5;
// var comprimento = 7;

// area = altura * comprimento;
// console.log(area);

//Declaração de variavel com let

// let forma = 'quadrado';
// let altura = 5;
// let comprimento = 7;
// let area;

// if(forma === 'quadrado'){
//     console.log("Sem calculo");
// } else {
//     area = altura *  comprimento;
//     console.log(area);
// }


//Declaração de variavel com const
const forma =  'retangulo';
const altura = 5;
const comprimento = 7;
let area;

if(forma === 'retangulo'){
    area = altura * comprimento;
}else {
    area = (altura * comprimento) / 2
}

console.log(area);

