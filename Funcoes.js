//Execuções de funções

//0 Execução sem função
let x = "";
console.log(x);
x = "oi";

//1 declara a função
function imprimeTexto(texto){
    console.log(texto);
}

//2 executa a função - é possível ser reaproveitada
imprimeTexto("Oi!");
imprimeTexto("Novo texto");


//Três formas de escrever funções.

//Primeira sem parametro nenhum
function soma(){
    //Varios comandos e por último return
    return 2 + 2;
    //Após esta linha nada será execudado
}

function arredondaParaBaixo(){
    return Math.floor(3.3);
}

function arredondaParaCima(){
    return Math.ceil(3.3);
}
console.log(soma());

imprimeTexto(soma());

imprimeTexto("3.4 " + " arredondado para baixo = " + arredondaParaBaixo());

imprimeTexto("3.4 " + " arredondado para cima = " + arredondaParaCima());

