const clientes = require("./001-clientes.json");

function filtrarApartamentoSemComplemento(clientes){
    return clientes.filter((cliente) => {
        return (cliente.endereco.apartamento &&
            !cliente.endereco.hasOwnProperty("complemento")
            );
    });

}

const listaFiltrada = filtrarApartamentoSemComplemento(clientes);

console.log(listaFiltrada);