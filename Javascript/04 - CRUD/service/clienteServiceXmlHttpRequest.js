
const listarClientes = () => {
    const promise = new Promise((resolve, reject) => {
        const http = new XMLHttpRequest()
        http.open("GET", "http://localhost:3000/profile")

        http.send()

        http.onload = () => {
            if (http.status >= 400) {
                reject(JSON.parse(http.response))
            } else {
                resolve(JSON.parse(http.response))
            }
        }
    })

    return promise
}

const createTable = (response) => {

    // const tbody = document.querySelector(".tabela tbody")
    const tbody = document.querySelector("[data-tabela]") //? Pesquisando pelo atributo

    response.forEach(data => tbody.appendChild(createLine(data)));
}

const createLine = (data) => {

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

    tr.appendChild(tdNome)
    tr.appendChild(tdEmail)
    tr.appendChild(tdBotoes)

    return tr

}

listarClientes().then(data => createTable(data))