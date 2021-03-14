import React from 'react'
import CardNota from '../components/CardNota'
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import '@testing-library/jest-dom'

describe('<CardNota />', () => {

    test('Saber se o achou o título, categoria e texto e o botão de deletar', () => {

        const titulo = 'Concerto do PS4'
        const texto = 'Falar com Felipe sobre como está o ps4'
        const categoria = 'Games'

        render(<CardNota
            deletarNota={() => { }}
            titulo={titulo}
            texto={texto}
            categoria={categoria}
            index={1} />)

        expect(screen.getByText(titulo)).toHaveClass('card-nota_titulo')
        expect(screen.getByText(texto)).toHaveClass('card-nota_texto')
        expect(screen.getByText(categoria)).toBeInTheDocument()
        expect(screen.getByRole('button', /x/i)).toBeInTheDocument()
    })

    test('Função deletar foi chamada', () => {

        const titulo = 'Concerto do PS4'
        const texto = 'Falar com Felipe sobre como está o ps4'
        const categoria = 'Games'
        const deletar = jest.fn()

        render(<CardNota
            deletarNota={deletar}
            titulo={titulo}
            texto={texto}
            categoria={categoria}
            index={1} />)

        const btnDeletar = screen.getByRole('button', /x/i)
        userEvent.click(btnDeletar)

        expect(deletar).toBeCalledTimes(1)

    })
})