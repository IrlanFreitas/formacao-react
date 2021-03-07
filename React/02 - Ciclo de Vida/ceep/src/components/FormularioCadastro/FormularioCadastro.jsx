import React, { Component } from 'react'
import './styles.css'

export default class FormularioCadastro extends Component {

  constructor(props) {
    super(props)
    this.state = {
      titulo: '',
      texto: '',
      categoria: 'Sem Categoria',
      categorias: []
    }

    //* Criando um referência única pra função
    this._novasCategorias = this._novasCategorias.bind(this)
  }

  componentDidMount() {
    this.props.categorias.inscrever(this._novasCategorias)
  }

  componentWillMount() {
    this.props.categorias.desinscrever(this._novasCategorias)
  }
  
  _novasCategorias(categorias) {
    this.setState({...this.state, categorias})
  }
  
  handle(event) {
    event.stopPropagation()
    this.setState({ [event.target.name]: event.target.value })
  }

  onSubmit(event) {
    event.preventDefault()
    const { titulo, texto, categoria } = this.state
    this.props.criarNota(titulo, texto, categoria)
    this.setState({ titulo: '', texto: '', categoria: '' })
  }

  render() {
    return (
      <form className="form-cadastro " onSubmit={this.onSubmit.bind(this)}>
        <select
          className="form-cadastro_input"
          name="categoria"
          value={this.state.categoria}
          onChange={this.handle.bind(this)}>
          <option key={`categoria-0`}>Sem Categoria</option>
          {this.state.categorias.map((categoria, index) => (
            <option key={`${categoria}-${index}`}>{categoria}</option>)
          )}
        </select>
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
