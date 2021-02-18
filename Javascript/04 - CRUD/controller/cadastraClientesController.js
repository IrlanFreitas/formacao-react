import clienteService from '../service/clienteServiceFetchApi.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    try {
        const cliente = { nome: formulario.nome.value, email: formulario.email.value }
        formulario.reset()
        await clienteService.criaCliente(cliente)
        window.location.href = '../telas/cadastro_concluido.html'

    } catch (error) {
        console.log(error)
        window.location.href = "../telas/erro.html"
    }
})