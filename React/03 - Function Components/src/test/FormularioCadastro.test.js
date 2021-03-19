import React from 'react'
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import FormularioCadastro from "../components/FormularioCadastro/FormularioCadastro";

describe('<FormularioCadastro />', () => {

    test('Verificar se o submit é chamado quando os campos obrigatórios estão vazios', () => {

        const onSubmit = jest.fn()
        const validarCpf = jest.fn()

        render(<FormularioCadastro onSubmit={onSubmit} validarCPF={validarCpf} />)

        userEvent.click(screen.getByRole('button', /Cadastrar/i))

        expect(onSubmit).toHaveBeenCalled()

    })

    test('Mensagem de erro do cpf é exibida', async () => {

        const onSubmit = jest.fn()
        const validarCpf = jest.fn()

        render(<FormularioCadastro onSubmit={onSubmit} validarCPF={validarCpf} />)

        const cpfInput = screen.getByTestId('cpf')

        userEvent.type(cpfInput, '0192')

        cpfInput.blur()

        expect(await screen.findByText(/CPF Deve ter 11 dígitos/i)).toBeInTheDocument();

    })

})