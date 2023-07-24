// log -> registro

const minhaVar = 444;

console.log(245);
console.log("eu sou um texto");
console.log(minhaVar);

//Tratamento de erro

console.error('deu erro!');
console.table([{a: 1, b: 'Y'},{a: 'Z', b:2}]);

console.table('texto');

console.time('process');
const value = expensiveProcess1(); // Returns 42
console.timeLog('process', value);
// Prints "process: 365.227ms 42".
//doExpensiveProcess2(value);
console.timeEnd('process');

function expensiveProcess1() {
    return 42;
}

console.log(new Error("Deu erro!"));