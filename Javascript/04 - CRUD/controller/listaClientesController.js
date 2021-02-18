import clienteService from '../service/clienteServiceFetchApi.js'

export const createTable = (response) => {

    const tbody = document.querySelector("[data-tabela]") //? Pesquisando pelo atributo

    tbody.innerHTML = ''

    response.forEach(data => tbody.appendChild(createLine(data)));
}

export const createLine = (data) => {

    const tr = document.createElement("tr")
    const tdNome = document.createElement("td")
    tdNome.classList.add("td")
    tdNome.setAttribute("data-td", "")
    tdNome.textContent = data.nome

    const tdEmail = document.createElement("td")
    tdEmail.textContent = data.email

    const tdBotoes = document.createElement("td")
    tdBotoes.innerHTML = `<td>
        <ul class="tabela__botoes-controle">
            <li><a href="../telas/edita_cliente.html?id=${data.id}" class="botao-simples botao-simples--editar">Editar</a></li>
            <li><button class="botao-simples botao-simples--excluir" type="button">Excluir</button></li>
        </ul>
    </td>`

    tdBotoes.querySelector(".botao-simples--excluir").addEventListener("click", async (event) => {
        event.preventDefault()
        try {
            await clienteService.removerCliente(data.id)
            // clienteService.listarClientes().then(data => createTable(data))
            tr.remove()
        } catch (error) {
            console.log(error)
            window.location.href = "../telas/erro.html"
        }

    })

    tr.appendChild(tdNome)
    tr.appendChild(tdEmail)
    tr.appendChild(tdBotoes)

    return tr

}

const render = async () => {
    try {
        const data = await clienteService.listarClientes()
        createTable(data)
    } catch (error) {
        console.log(error)
        window.location.href = "../telas/erro.html"
    }
}

render()