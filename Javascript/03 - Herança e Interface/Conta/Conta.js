import Cliente from '../Cliente.js';

//* Classe Abstrata
export default class Conta {

    constructor(saldoInicial, cliente, agencia) {
        // ! Um jeito de bloquear a instanciação da classe
        if (this.constructor == Conta) {
            throw new Error("Você não deveria instânciar essa classe (Conta). É uma classe abstrata.")
        }

        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this._cliente = valor
        }
    }

    get cliente() {
        return this._cliente
    }

    get saldo() {
        return this._saldo
    }

    //* Método Abstrato
    sacar(valor) {
        throw new Error("É necessário sobrescrever o método.")
    }

    _sacar(valor, taxa) {
        valor = taxa * valor

        if (this._saldo <= valor) return 0
        this._saldo -= valor
        return valor

    }

    depositar(valor) {
        if (valor < 0) return;
        this._saldo += valor
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}