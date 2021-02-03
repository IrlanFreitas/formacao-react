import Cliente from './Cliente.js'

export default class ContaCorrente {

    agencia;
    _cliente;
    static numeroContas = 0;

    set cliente(valor) {
        if (valor instanceof Cliente) {
            this._cliente = valor
        }
    }

    get cliente() {
        return this._cliente
    }

    //! #saldo;  Experimental
    _saldo = 0; //* Convencional

    get saldo() {
        return this._saldo
    }

    constructor(agencia, cliente) {
        this.agencia = agencia
        this.cliente = cliente
        this._saldo = 0
        ContaCorrente.numeroContas++
    }

    sacar(valor) {
        if (this._saldo <= valor) return
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