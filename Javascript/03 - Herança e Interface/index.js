// import Cliente from './Cliente.js'
// import ContaCorrente from './Conta/ContaCorrente.js'
// import ContaPoupanca from './Conta/ContaPoupanca.js'
// import Conta from './Conta/Conta.js'

import Gerente from './Funcionario/Gerente.js'
// import Funcionario from './Funcionario/Funcionario.js'
import Diretor from './Funcionario/Diretor.js'
import SistemaAutenticacao from './SistemaAutenticacao.js'
import Cliente from './Cliente.js'

const testeCliente = () => {

    const cliente1 = new Cliente("Ricardo", "000.222.444-55")
    // const cliente2 = new Cliente("Alice", "111.777.231-23")

    const ccDoRicardo = new ContaCorrente(1001, cliente1)
    // const ccDaAlice = new ContaCorrente(1002, cliente2)

    const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)
    // const conta = new Conta(50, cliente1, 1002)

    console.log({ ccDoRicardo });
    console.log({ contaPoupanca });

    // ccDoRicardo.agencia = 1001
    // ccDoRicardo.cliente = cliente1
    // ccDoRicardo.depositar(500)
    // ccDoRicardo.transferir(200, ccDaAlice)

    // // ccDaAlice.agencia = 1002
    // // ccDaAlice.cliente = cliente2

    // // console.log(cliente1, cliente2)
    // console.log(ContaCorrente.numeroContas)
    // console.log(ccDoRicardo, ccDaAlice)

}

const testeFuncionario = () => {

    const cliente = new Cliente("Paula", "000.222.444-55", 1212)

    const diretor = new Diretor("Rodrigo", 10000, "30132442144")
    diretor.cadastrarSenha("123456789")
    
    const gerente = new Gerente("Eloa",5000, "30131445324")
    gerente.cadastrarSenha("123456")

    const logadoDiretor = SistemaAutenticacao.login(diretor, "123456789")
    const logadoGerente = SistemaAutenticacao.login(gerente, "123456")
    const logadoCliente = SistemaAutenticacao.login(cliente, 1212)

    console.log(`Está logado -  Diretor: ${logadoDiretor ? "Sim": "Não"}`)
    console.log(`Está logado -  Gerente: ${logadoGerente ? "Sim": "Não"}`)
    console.log(`Está logado -  Cliente: ${logadoCliente ? "Sim": "Não"}`)

}

testeFuncionario()