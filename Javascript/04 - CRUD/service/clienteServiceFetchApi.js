
const listarClientes = () => {

    return fetch("http://localhost:3000/profile").then(response => {
        if (response.ok) return response.json()

        throw new Error("Não foi possível listar os clientes")
    })
}

const criaCliente = (cliente) => {
    return fetch('http://localhost:3000/profile', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente)
    }).then((response) => {
        if (response.ok) return response.body

        throw new Error("Não foi possível cadastrar o cliente")
    })
}

const removerCliente = id => {
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'DELETE',
    }).then((response) => {
        if (!response.ok) throw new Error("Não foi possível remover o cliente")
    })
}

const obterCliente = id => {
    return fetch(`http://localhost:3000/profile/${id}`).then(response => {
        if (response.ok) return response.json()

        throw new Error("Não foi possível obter o cliente")
    })
}

const editarCliente = (cliente) => {
    return fetch(`http://localhost:3000/profile/${cliente.id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(cliente)
    }).then((response) => {
        if (response.ok) return response.body

        throw new Error("Não foi possível editar o cliente")
    })
}

export default {
    listarClientes,
    criaCliente,
    removerCliente,
    obterCliente,
    editarCliente
}
