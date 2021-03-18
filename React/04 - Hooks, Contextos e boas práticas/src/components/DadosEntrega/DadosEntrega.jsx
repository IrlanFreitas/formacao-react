import { Button, TextField } from '@material-ui/core'
import React, { useState, useContext } from 'react'

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

export default function DadosEntrega({ onSubmit }) {

    const validacoes = useContext(ValidacoesCadastro)

    const { errors, canNext } = useErrors(validacoes)

    const [form, setForm] = useState({
        cep: '',
        endereco: '',
        numero: '',
        estado: '',
        cidade: '',
    });

    const handleForm = (event) => {
        setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    };

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (canNext(errors)) {
                onSubmit(form)
            }
        }}>
            <TextField id="cep" name="cep" label="CEP" value={form.cep} onChange={handleForm} type="number" variant="outlined" margin="normal" />
            <TextField id="endereco" name="endereco" label="Endereço" value={form.endereco} onChange={handleForm} type="text" variant="outlined" margin="normal" fullWidth />
            <TextField id="numero" name="numero" label="Número" value={form.numero} onChange={handleForm} type="number" variant="outlined" margin="normal" />
            <TextField id="estado" name="estado" label="Estado" value={form.estado} onChange={handleForm} type="text" variant="outlined" margin="normal" />
            <TextField id="cidade" name="cidade" label="Cidade" value={form.cidade} onChange={handleForm} type="text" variant="outlined" margin="normal" />
            <Button type="submit" variant="contained" color="primary" fullWidth>Finalizar Cadastro</Button>
        </form>
    )
}
