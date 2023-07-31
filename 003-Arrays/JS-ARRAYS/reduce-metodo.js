const numeros = [43, 50, 65, 12]

const soma = numeros.reduce((acc, atual) => atual + acc, 0)

console.log(soma) //170


//Vamos reescrever o reduce() de uma forma um pouco mais 
//extensa para separar melhor as partes do código:

const soma1 = numeros.reduce(function (acc, atual) {
    return atual + acc
   }, 0)

   //Uma terceira forma de reescrever seria 
   //escrevendo a função callback fora do reduce():

   function operacaoNumerica(acc, atual) {
    return atual + acc
   }
   
   const soma2 = numeros.reduce(operacaoNumerica, 0)