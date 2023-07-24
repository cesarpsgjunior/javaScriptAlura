//Vem do uso de uma flecha => 

function apresentar(nome)
{
    return `Me nome é ${nome}`;
}


const apresentarArrow = nome => `Meu nome e ${nome}`; 
const soma = (num1, num2) => 2 + 3;
console.log(soma());


//Arrow function com 2 linhas construção

const numerosPequenos = (numero1, numero2) =>  {
    if(numero1 > 10 || numero2 > 10){
        return 'Somente numeros 1 a 9';
    } else {
        return numero1 + numero2;
    }
}
