import { useState } from 'react'

import { Button, TextField, FormControl, FormControlLabel, Switch, FormGroup } from '@material-ui/core'

export default function FormularioCadastro({ onSubmit, validarCPF }) {

    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        cpf: '',
        promocoes: true,
        novidades: true,
    });

    const [errors, setErrors] = useState({
        cpf: { valid: true, message: '' }
    })

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
        <form onSubmit={(event) => { event.preventDefault(); onSubmit(form); }} >
            <FormControl fullWidth  >

                <TextField value={form.nome}
                    onChange={handleForm}
                    required
                    id="nome"
                    name="nome"
                    label="Nome"
                    variant="outlined"
                    margin="normal" />

                <TextField value={form.sobrenome}
                    onChange={handleForm}
                    required
                    id="sobrenome"
                    name="sobrenome"
                    label="Sobrenome"
                    variant="outlined"
                    margin="normal" />

                <TextField value={form.cpf}
                    id="cpf"
                    onChange={handleForm}
                    required
                    data-testid="cpf"
                    error={!errors.cpf.valid}
                    helperText={errors.cpf.message}
                    onBlur={event => {
                        setErrors({ cpf: validarCPF(event.target.value) })
                    }}
                    name="cpf"
                    label="Cpf"
                    variant="outlined"
                    margin="normal" />

                <FormGroup row>
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
                </FormGroup>

                <Button variant="contained" color="primary" type="submit">Cadastrar</Button>
            </FormControl>
        </form>
    )
}

// function Teste () {
//     const [teste, setTeste] = useState('')
//     return <>{}</>
// }