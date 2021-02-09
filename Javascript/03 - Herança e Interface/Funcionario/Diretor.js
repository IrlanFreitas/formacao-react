import Funcionario from "./Funcionario.js"

export default class Diretor extends Funcionario {
    constructor(nome, salario, cpf) {
        super(nome, salario, cpf)
        
        //? Sobrescrevendo propriedades
        this._bonificacao = 2
    }
}