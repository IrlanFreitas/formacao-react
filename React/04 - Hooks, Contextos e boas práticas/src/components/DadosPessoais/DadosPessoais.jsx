import { useState, useContext } from 'react'

import { Button, TextField, FormControlLabel, Switch } from '@material-ui/core'

import ValidacoesCadastro from '../../contexts/ValidacoesCadastro';
import useErrors from '../../hooks/useErrors';

export default function DadosPessoais({ next }) {

    const validacoes = useContext(ValidacoesCadastro)

    const { errors, validateFields, canNext } = useErrors(validacoes)

    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        promocoes: true,
        novidades: true,
    });

    // const [errors, setErrors] = useState({
    //     cpf: { valid: true, message: '' }
    // })

    const handleForm = (event) => {
        setForm(prevState => ({ ...prevState, [event.target.name]: tratarCampos(event) }));
    };

    const tratarCampos = ({ target: { name, checked, value } }) => {
        if (name === 'promocoes' || name === 'novidades') {
            return checked
        }

        return value
    }

    return (
        <form onSubmit={(event) => {
            event.preventDefault();
            if (canNext(errors)) {
                next(form)
            }
        }} >

            <TextField value={form.nome} onChange={handleForm} id="nome" name="nome" label="Nome" variant="outlined" margin="normal" fullWidth />

            <TextField value={form.sobrenome} onChange={handleForm} id="sobrenome" name="sobrenome" label="Sobrenome" variant="outlined" margin="normal" fullWidth />

            <TextField value={form.cpf}
                id="cpf"
                onChange={handleForm}
                error={!errors.cpf.valid}
                helperText={errors.cpf.message}
                onBlur={validateFields}
                name="cpf"
                label="Cpf"
                variant="outlined"
                margin="normal"
                fullWidth />


            <FormControlLabel
                control={<Switch color="primary" checked={form.promocoes} onChange={handleForm} />}
                name="promocoes"
                label="Promoções"
            />
            <FormControlLabel
                control={<Switch color="primary" checked={form.novidades} onChange={handleForm} />}
                name="novidades"
                label="Novidades"
            />


            <Button variant="contained" color="primary" type="submit">Próximo</Button>

        </form>
    )
}
