import React, { Component } from 'react'
import './style.css'
// import delete from '../../assets/img/delete.svg'
// import { ReactComponent as Delete } from '../../assets/img/delete.svg'

export default class CardNota extends Component {

  handleDelete() {
    this.props.deletarNota(this.props.index)
  }

  render() {
    return (
      <section className="card-nota">
        <header className="card-nota_cabecalho">
          <h3 className="card-nota_titulo">{this.props.titulo}</h3>
          {/* <img src={delete} alt="Ícone de Lixeira para deleção" srcset=""/> */}
          {/* <Delete /> */}
          <button onClick={this.handleDelete.bind(this)}>x</button>
          <h4 >{this.props.categoria}</h4>
        </header>
        <p className="card-nota_texto">{this.props.texto}</p>
      </section>
    );
  }
}
