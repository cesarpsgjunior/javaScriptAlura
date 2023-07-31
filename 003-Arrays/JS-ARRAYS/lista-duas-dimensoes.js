const alunos = ["Cesar", "Joao", "PAula"];
const medias = [8,10,5];

const listaDeAlunosEMedias = [alunos, medias];

//Exibe ambas as listas
console.log(listaDeAlunosEMedias);

//Exibe item específico de cada lista

for (var i = 0; i < alunos.length; i++){
    console.log(`O segundo item de alunos e ${
        listaDeAlunosEMedias[0][i]
    }`)
}

for (var x = 0; x < medias.length; x++){
    console.log(`O segundo item de medias e ${
        listaDeAlunosEMedias[1][x]
    }`)
}



