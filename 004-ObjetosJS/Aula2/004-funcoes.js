const cliente = 
{
    rua: "R: Joseph Climber",
    numero: 1344,
    apartamento: true,
    complemento: "Ap 314",
    saldo: 200,
    efetuaPagamento: function (valor) {
        if (valor > this.saldo) {
            console.log("Operação não permitida")
        } else {
            this.saldo -= valor;
            console.log(`Pagamento efetuado - novo saldo ${this.saldo}`);
        }
    }
};


cliente.efetuaPagamento(199);