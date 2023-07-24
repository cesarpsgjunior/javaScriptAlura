//Parametros em funções

//Sem parâmetros

function soma(){
    return 2 + 2;
}

console.log(soma());

//Com parametros

function somaComParametros(num1, num2){
    return num1 + num2;
}

console.log(somaComParametros(3, 4));
console.log(somaComParametros(-30, 4));

///Ordem dos parametros

function nomeIdade(nome, idade){
    return `Meu nome é ${nome} e idade é ${idade}`;
}

console.log(nomeIdade(40, "cesar"));

//Parametros X Argumentos

function multiplicaNumeros(numero1, numero2){
    return numero1 * numero2;
}

console.log(multiplicaNumeros(somaComParametros(3, 3), somaComParametros(3, 5)));
console.log(multiplicaNumeros(somaComParametros(3, 5)));


