//! Necessário usar o React já que se trata de um component
import React from 'react'

//! Duas funções do RTL(React-Testing-Library)
//! Uma para renderizar o component (Render)
//! Outra para que o teste acesse esse componente renderizado (screen)
import { render, screen, fireEvent } from '@testing-library/react'

import App, { calcularNovoSaldo } from '../App.js'

//* Serve para organizar os blocos e dar sentido ao contexto do teste
describe('Componente principal', () => {

    //! Serve para melhorar a organização dos testes
    //* Teste de componente
    describe('Quando eu entro no app do banco', () => {

        it('O nome é exibido', () => {

            //?Renderiza o componente
            render(<App />)

            //? Procura dentro do componente renderizado
            //? Como essa ligação é feita?
            //? Esse eu precisasse de mais de um componente aqui?
            expect(screen.getByText('ByteBank')).toBeInTheDocument()
        })

        //* it ou test é a mesma coisa.  
        test('O saldo é exibido', () => {
            render(<App />)

            expect(screen.getByText('Saldo:')).toBeInTheDocument()
        })

        it('O botão Realizar operação é exibido ', () => {

            render(<App />)

            expect(screen.getByText('Realizar operação')).toBeInTheDocument()

        });
    })

    //* Teste de função
    describe('Quando eu realizo uma transação', () => {
        it('que é saque, o valor vai diminuir, com o saldo em conta', () => {

            const valores = { transacao: 'saque', valor: 50 }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(100)
        });

        it('que é saque, o valor vai diminuir, sem o saldo em conta', () => {

            const valores = { transacao: 'saque', valor: 50 }

            const novoSaldo = calcularNovoSaldo(valores, 0)

            expect(novoSaldo).toBe(-50)
        });

        it('que é deposito, o valor vai aumentar', () => {
            const valores = { transacao: 'deposito', valor: 200 }

            const novoSaldo = calcularNovoSaldo(valores, 150)

            expect(novoSaldo).toBe(350)
        });

        //? Simulando a ação do usuário de realizar uma transação
        it.skip('que é um saque, a transação deve ser realizada com o valor em conta', () => {

            const { getByText, getByTestId, getByLabelText } = render(<App />)

            //* Baseado no valor que é inicializado
            const saldo = getByText('R$ 1000')

            const transacao = getByLabelText('Saque')

            const valor = getByTestId('valor')

            const botaoTransacao = getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            //* fireEvent é um recurso do rtl para simular eventos
            //* simulando a opção de radio button
            fireEvent.click(transacao, { target: { value: 'saque' } })
            fireEvent.change(valor, { target: { value: 10 } })
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')
        })

        //? Simulando a ação do usuário de realizar uma transação
        it('que é um saque, a transação deve ser realizada com o valor em conta', () => {

            render(<App />)

            //* Baseado no valor que é inicializado
            const saldo = screen.getByText('R$ 1000')

            const transacao = screen.getByLabelText('Saque')

            const valor = screen.getByTestId('valor')

            const botaoTransacao = screen.getByText('Realizar operação')

            expect(saldo.textContent).toBe('R$ 1000')

            //* fireEvent é um recurso do rtl para simular eventos
            //* simulando a opção de radio button
            fireEvent.click(transacao, { target: { value: 'saque' } })
            fireEvent.change(valor, { target: { value: 10 } })
            fireEvent.click(botaoTransacao)

            expect(saldo.textContent).toBe('R$ 990')
        })


        it.skip('que é um saque, só que sem o valor proposto na conta e fica com o valor negativo', () => {
            const { getByText, getByTestId, getByLabelText } = render(<App />)

            const labelSaldo = getByText('R$ 1000')

            const radioButtonTransacao = getByLabelText('Saque')

            const inputValor = getByTestId('valor')

            const buttonTransacao = getByText('Realizar operação')

            expect(labelSaldo.textContent).toBe('R$ 1000')
            
            fireEvent.click(radioButtonTransacao, { target: {value: 'saque'} })
            fireEvent.change(inputValor, { target: { value: 2000} })
            fireEvent.click(buttonTransacao)
            
            expect(labelSaldo.textContent).toBe('R$ -1000')


        })
    });
})

