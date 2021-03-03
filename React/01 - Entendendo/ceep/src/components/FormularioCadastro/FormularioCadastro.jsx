import React, { Component } from 'react'
import './styles.css'

export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      titulo: '',
      texto: '',
    }
  }

  handle(event) {
    this.setState({ [event.target.name]: event.target.value })
  }
  
  onSubmit(event) {
    event.preventDefault()
    this.props.criarNota(this.state.titulo, this.state.texto)
    this.setState({ titulo: '', texto: '' })
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this.onSubmit.bind(this)}>
        <input
          type="text"
          name="titulo"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this.handle.bind(this)}
          value={this.state.titulo}
          />
        <textarea
          rows={15}
          name="texto"
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this.handle.bind(this)}
          value={this.state.texto}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
            </button>
      </form>
    );
  }
}
