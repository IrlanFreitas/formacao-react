import React from 'react'
import { render, screen } from '@testing-library/react'
import api from '../api'
import App from '../App.js'

//! Sobrescrevendo a chamada da api com o Jest
jest.mock('../api')

describe('Requisições para API', () => {
    it('Exibir lista de transações através da API (De forma assíncrona)', async () => {
        
        api.listaTransacoes.mockResolvedValue([{
            "valor": "10",
            "transacao": "saque",
            "data": "10/08/2020",
            "id": 1
        },
        {
            "transacao": "deposito",
            "valor": "20",
            "data": "26/09/2020",
            "id": 2
        }])

        render(<App />)

        //! o findBy retorna uma promise e permite trabalhar de forma assíncrona
        //! Ele espera o componente aparecer para fazer o expect
        //! ou isso pode ser testado também
        // await screen.findByText('saque')
        
        expect(await screen.findByText('saque')).toBeInTheDocument()

        expect(screen.getByTestId('transacoes').children.length).toBe(2)
    })
})