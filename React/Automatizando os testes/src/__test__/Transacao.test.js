import React from 'react'

import Transacao from '../transacoes/Transacao'
import { render } from "@testing-library/react";

describe('Componente de Transação do Extrato', () => {
    it('O snapshot do componente deve permanecer sempre o mesmo', () => {

        const { container } = render(<Transacao
            data="08/09/2020"
            tipo="saque"
            valor="20.00" />)

        expect(container.firstChild).toMatchSnapshot()
    })
})