import React from 'react'
import './App.css'
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro'
import { Container, Typography } from '@material-ui/core';
import 'fontsource-roboto';

export default function App() {
    return (
        <Container maxWidth="md" component="article">
            <Typography variant="h3" component="h1" align="center">Formulário de Cadastro</Typography>
            <FormularioCadastro onSubmit={onSubmit} validarCPF={validarCPF} />
        </Container>)
}

function onSubmit(dados) {
    console.log(dados)
}

function validarCPF(cpf) {
    return cpf.length !== 11 ? { valid: false, message: 'CPF Deve ter 11 dígitos' } : { valid: true, message: '' }
}