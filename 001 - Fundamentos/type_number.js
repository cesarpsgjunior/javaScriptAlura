//tipo number

const meuNumero = 3;

const primeiroNumero = 4;
const segundoNumero = 5;

const operacaoMatematica = primeiroNumero + segundoNumero;

console.log(operacaoMatematica);

const numeroDecimalAntesDoPonto = 3.3;
const numeroDecimalSemNumeroAntesDoPonto = .5;

const calculoEntreFlutuantes = numeroDecimalAntesDoPonto * numeroDecimalSemNumeroAntesDoPonto;

console.log(calculoEntreFlutuantes.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}));

