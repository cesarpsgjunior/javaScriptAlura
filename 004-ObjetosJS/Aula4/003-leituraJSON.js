const dados = require("./002-cliente.json");

console.log(dados);
console.log(typeof dados);

//stringfy traduz um JSON para uma string
const converterEmString = JSON.stringify(dados);

console.log(converterEmString);
console.log(typeof converterEmString);

//parse converte uma string para o JSON

const converterEmJSON = JSON.parse(converterEmString);

console.log(converterEmJSON);
console.log(typeof converterEmJSON);