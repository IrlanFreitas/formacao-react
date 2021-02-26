import React from 'react'
import Conta from "../conta/Conta";

import { render, screen, fireEvent } from "@testing-library/react";

describe.only('Componente de Conta', () => {

    it('Exibir o saldo da conta como valor monetária', () => {

        render(<Conta saldo={2500} />)

        const saldo = screen.getByTestId('saldo-conta').textContent

        expect(saldo).toBe('R$ 2500')

    })

    it.skip('Chama a função de realizar transação, quando o botão é clicado, botão sempre habilitado', () => {

        //* A função não faz nada, mas dá pra saber se foi chamada
        const funcaoRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

        //* necessário chamar a ação que invoca a função
        fireEvent.click(screen.getByText('Realizar operação'))

        expect(funcaoRealizarTransacao).toHaveBeenCalled()
    })

    it('Chama a função de realizar transação, quando o botão é clicado, botão somente habilitado depois de valores preenchidos', () => {

        //* A função não faz nada, mas dá pra saber se foi chamada
        const funcaoRealizarTransacao = jest.fn()

        render(<Conta saldo={1000} realizarTransacao={funcaoRealizarTransacao} />)

        //* necessário chamar a ação que invoca a função
        fireEvent.click(screen.getByText('Realizar operação'))

        expect(funcaoRealizarTransacao).not.toHaveBeenCalled()
    })
})