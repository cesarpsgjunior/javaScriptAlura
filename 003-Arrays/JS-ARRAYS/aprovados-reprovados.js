const nomes = ["Joao", "Maria", "Bruxa"];
const medias = [7, 4.5, 8];

const reprovados = nomes.filter((_, indice) => {
    return novaLista =  medias[indice] < 7;
})

console.log(reprovados);