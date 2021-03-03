import React from "react";

import Transacoes from '../transacoes/Transacoes'
import { render } from "@testing-library/react";

describe('Componente de Listagem de Transações', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {

        const transacoes = [{
            id: 1,
            tipo: 'saque',
            valor: '30.00',
            data: '01/01/2021',
        }, {
            id: 2,
            tipo: 'deposito',
            valor: '450.00',
            data: '15/01/2021',
        }]

        const { container } = render(<Transacoes transacoes={transacoes} />)
        expect(container.firstChild).toMatchSnapshot()
    })
})
