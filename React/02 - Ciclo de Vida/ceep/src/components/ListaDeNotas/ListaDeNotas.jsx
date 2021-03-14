import React, { Component } from 'react'
import CardNota from '../CardNota'

import './styles.css'

export default class ListaDeNotas extends Component {

  constructor() {
    super()
    this.state = {
      notas: []
    }

    this._novasNotas = this._novasNotas.bind(this)
  }

  componentDidMount() {
    this.props.notas.inscrever(this._novasNotas)
  }

  componentWillMount() {
    this.props.notas.desinscrever(this._novasNotas)
  }

  _novasNotas(notas) {
    this.setState({ ...this.state, notas })
  }

  render() {
    return (
      <ul data-testid="lista-notas" className="lista-notas">
        {this.state.notas.map((nota, index) =>
        (<li className="lista-notas_item" key={index}>
          <CardNota deletarNota={this.props.deletarNota}
            titulo={nota.titulo}
            texto={nota.texto}
            categoria={nota.categoria}
            index={index} />
        </li>))}
      </ul>
    );
  }
}
