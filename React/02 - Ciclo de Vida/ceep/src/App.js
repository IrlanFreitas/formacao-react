import React, { Component } from 'react'
import FormularioCadastro from './components/FormularioCadastro';
import { ListaDeNotas } from './components/ListaDeNotas'
import { ListaDeCategorias } from './components/ListaDeCategorias'
import './assets/css/App.css'
import './assets/css/index.css'
import Categorias from './data/Categorias';
import Notas from './data/Notas';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.categorias = new Categorias();
    this.notas = new Notas();
    // this.state = {
    //   notas: [],
    //   categorias: [],
    // }
  }

  // criarNota(titulo, texto, categoria) {
  //   this.setState({ notas: [...this.state.notas, { titulo, texto, categoria }] })
  // }

  // criarCategoria(event) {
  //   this.setState({ categorias: [...this.state.categorias, event.target.value] })
  //   event.target.value = ''
  // }

  // deletarNota(index) {
  //   this.state.notas.splice(index, 1);
  //   this.setState({ notas: this.state.notas })
  // }

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          criarNota={this.notas.adicionar.bind(this.notas)} />
        <main className="conteudo-principal">
          <ListaDeCategorias
            criarCategoria={this.categorias.adicionar.bind(this.categorias)}
            categorias={this.categorias} />
          <ListaDeNotas
            notas={this.notas}
            deletarNota={this.notas.deletar.bind(this.notas)} />
        </main>
      </section>
    );
  }
}
