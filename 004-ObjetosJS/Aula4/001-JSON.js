//JSON vem de Java Script Object Notation

//Objetos criados de forma comum
const cliente = {
    nome: "Cesar",
    idade: 22,
    email: "Nome@email.com",
    telefone: ["1222112211", "112244455"],
enderecos: {
        rua: "R: Joseph Climber",
        numero: 1344,
        apartamento: true,
        complemento: "Ap 314",
    },
};


//Objeto criado no formato JSON
//Funções não são permitidos
//Comentários não permitidos aqui eles estão apenas para exemplificar
//Suporta apenas tipos primitivos

/*
{
    "nome": "Cesar",  //Chaves das propriedades entre ""
    "idade": 22,
    "email": "Nome@email.com",
    "telefone": ["1222112211", "112244455"], //Pode ter arrays
"enderecos": {                               //Pode ter objetos 
        "rua": "R: Joseph Climber",
        "numero": 1344,
        "apartamento": true,
        "complemento": "Ap 314" //Não é permitido virgula no último item
    }
};
*/