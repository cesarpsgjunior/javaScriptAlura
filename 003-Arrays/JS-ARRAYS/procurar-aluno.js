const alunos = ["Cesar", "Joao", "PAula"];
const medias = [8,10,5];

const listaDeAlunosEMedias = [alunos, medias];

function exibeAlunoENotas(aluno){
    if(listaDeAlunosEMedias[0].includes(aluno)){ //Includes checa se o parametro esta incluso na lista
        
        //Declarando de forma separada
        // const alunos = listaDeAlunosEMedias[0];
        // const medias = listaDeAlunosEMedias[1];

        //Declarando em linha unica
        const [alunos, medias] = listaDeAlunosEMedias;
        
        const indice = alunos.indexOf(aluno); //IndexOf retorna o índice do parametro passado na lista
        const mediaDoAluno = medias[indice]; 

        console.log(`Aluno(a) ${aluno} tem média ${mediaDoAluno}`);
    }else {
        console.log("Aluno não existe");
    }
}

exibeAlunoENotas("Joao");