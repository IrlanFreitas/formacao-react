import Cliente from './Cliente.js'
import ContaCorrente from './ContaCorrente.js'

const cliente1 = new Cliente("Ricardo", "000.222.444-55")
const cliente2 = new Cliente("Alice", "111.777.231-23")

const ccDoRicardo = new ContaCorrente(1001, cliente1)
const ccDaAlice = new ContaCorrente(1002, cliente2)

// ccDoRicardo.agencia = 1001
// ccDoRicardo.cliente = cliente1
ccDoRicardo.depositar(500)
ccDoRicardo.transferir(200, ccDaAlice)

// ccDaAlice.agencia = 1002
// ccDaAlice.cliente = cliente2

// console.log(cliente1, cliente2)
console.log(ContaCorrente.numeroContas)
console.log(ccDoRicardo, ccDaAlice)