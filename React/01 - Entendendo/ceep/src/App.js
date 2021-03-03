import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import ListaDeNotas from './components/ListaDeNotas/ListaDeNotas'
import './assets/App.css'
import './assets/index.css'

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      notas: []
    }
  }

  criarNota(titulo, texto) {
    this.setState({ notas: [...this.state.notas, { titulo, texto }] })
  }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro criarNota={this.criarNota.bind(this)} />
        <ListaDeNotas notas={this.state.notas} />
      </section>
    );
  }
}
