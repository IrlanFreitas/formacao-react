import { Button, TextField } from '@material-ui/core'
import React, { useState, useContext } from 'react'
import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

export default function DadosUsuario({ next }) {

    const [form, setForm] = useState({
        email: '',
        senha: '',
    });

    const validacoes = useContext(ValidacoesCadastro)

    const { errors, validateFields, canNext } = useErrors(validacoes)

    const handleForm = (event) => {
        setForm(prevState => ({ ...prevState, [event.target.name]: event.target.value }));
    };

    return (
        <form onSubmit={event => {
            event.preventDefault();
            if (canNext(errors)) {
                next(form)
            }
        }}>
            <TextField
                required
                id="email"
                name="email"
                value={form.email}
                onChange={handleForm}
                label="email"
                type="email"
                variant="outlined"
                margin="normal"
                fullWidth />
            <TextField
                required
                id="senha"
                name="senha"
                onBlur={validateFields}
                error={!errors.senha.valid}
                helperText={errors.senha.message}
                value={form.senha}
                onChange={handleForm}
                label="senha"
                type="password"
                variant="outlined"
                margin="normal"
                fullWidth />
            <Button type="submit" variant="contained" color="primary">Próximo</Button>
        </form>
    )
}
