import React from 'react'
import { defaultError } from "../models/cadastro";

//! Declaração de valores iniciais
const ValidacoesCadastro = React.createContext({ cpf: defaultError, senha: defaultError, nome: defaultError })

export default ValidacoesCadastro
