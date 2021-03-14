import React from 'react'
import { render, screen } from "@testing-library/react";
import { ListaDeNotas } from "../components/ListaDeNotas";
import Notas from '../data/Notas';
import '@testing-library/jest-dom'

describe('<ListaDeNotas />', () => {
    test.skip('Verificar se todos os itens foram renderizados', () => {

        // const notasList = [
        //     {
        //         deletarNota: () => { },
        //         titulo: '',
        //         texto: '',
        //         categoria: 'Games'
        //     },
        //     {
        //         deletarNota: () => { },
        //         titulo: '',
        //         texto: '',
        //         categoria: 'Finanças'
        //     },
        //     {
        //         deletarNota: () => { },
        //         titulo: '',
        //         texto: '',
        //         categoria: 'Moradia'
        //     },
        // ]

        const notas = new Notas();
        
        render(<ListaDeNotas notas={notas} deletarNota={notas.deletar.bind(notas)}/>)

        notas.adicionar('Concerto do PS4', 'Falar com Felipe se vai precisar compra peça', 'Games')
        notas.adicionar('Balanço das contas', 'Fazer a atualização do dinheiro que tá nas contas', 'Finanças')
        notas.adicionar('Comida', 'Pegar o dinheiro de pedro pra comprar comida', 'Moradia')


        const lista = screen.getByTestId('lista-notas')

        expect(lista).toBeInTheDocument()
    })
})