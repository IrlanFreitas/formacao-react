import React from 'react'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';
import ValidacoesCadastro from "./contexts/ValidacoesCadastro";
import { validarCPF, validarSenha, validarNome } from "./models/cadastro";

export default function App() {
    return (
        <Container maxWidth="sm" component="article">
            <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
            {/**  Esses valores sobrescrevem os valores default   */}
            <ValidacoesCadastro.Provider value={{ cpf: validarCPF, senha: validarSenha, nome: validarNome }}>
                <FormularioCadastro onSubmit={onSubmit} />
            </ValidacoesCadastro.Provider>
        </Container >)
}

function onSubmit(dados) {
    console.log(dados)
}

