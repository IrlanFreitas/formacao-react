import React, { Component } from 'react'
import './styles.css'

export default class ListaDeCategorias extends Component {

    constructor() {
        super()
        this.state = {
            categorias: []
        }

        this._novasCategorias = this._novasCategorias.bind(this)
    }

    componentDidMount() {
        this.props.categorias.inscrever(this._novasCategorias)
    }

    componentWillMount() {
        this.props.categorias.desinscrever(this._novasCategorias)
    }

    _novasCategorias(categorias) {
        this.setState({ ...this.state, categorias })
    }

    criarCategoria(event) {
        event.persist();
        event.key === 'Enter' && (() => {
            this.props.criarCategoria(event.target.value)
            event.target.value = ''
        })()
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.state
                        .categorias
                        .map((categoria, index) =>
                                <li key={`${categoria}-${index}`} className="lista-categorias_item" >
                                    {categoria}
                                </li>)}
                </ul>
                <input className="lista-categorias_input"
                    placeholder="Adicionar Categoria"
                    onKeyPress={this.criarCategoria.bind(this)} />
            </section>
        )
    }
}
