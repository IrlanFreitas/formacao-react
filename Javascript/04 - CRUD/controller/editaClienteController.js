import clienteService from '../service/clienteServiceFetchApi.js'

const formulario = document.querySelector('[data-form]')

const url = new URL(window.location)
const id = url.searchParams.get("id")

const obterCliente = async () => {
    try {
        const cliente = await clienteService.obterCliente(id)

        formulario.nome.value = cliente.nome
        formulario.email.value = cliente.email
    } catch (error) {
        console.log(error)
        window.location.href = "../telas/erro.html"
    }
}

obterCliente()

formulario.addEventListener("submit", async (event) => {
    event.preventDefault()
    try {
        const cliente = { nome: formulario.nome.value, email: formulario.email.value, id }
        formulario.reset()
        await clienteService.editarCliente(cliente)
        window.location.href = '../telas/edicao_concluida.html'

    } catch (error) {
        console.log(error)
        window.location.href = "../telas/erro.html"
    }
})