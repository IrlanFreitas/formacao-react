import React, { useState, useEffect } from 'react'

import DadosPessoais from '../DadosPessoais/DadosPessoais'
import DadosEntrega from '../DadosEntrega/DadosEntrega'
import DadosUsuario from '../DadosUsuario/DadosUsuario'
import { Typography, Stepper, Step, StepLabel } from '@material-ui/core'

export default function FormularioCadastro({ onSubmit, validacoes }) {

    const [etapa, setEtapa] = useState(0);
    const [formData, setFormData] = useState({});

    const next = () => {
        setEtapa(prevState => prevState + 1)
    }

    const getFormData = (data) => {
        setFormData(prevData => ({ ...prevData, ...data }))
        next()
    }

    useEffect(() => {
        if (etapa === 3) {
            onSubmit(formData)
        }
    })

    const formularios = (etapa) => {
        const form = {
            0: <DadosUsuario next={getFormData} />,
            1: <DadosPessoais next={getFormData} />,
            2: <DadosEntrega onSubmit={getFormData} />,
            3: <Typography variant="h5">Obrigado</Typography>,
            default: <Typography>Error</Typography>
        }

        return form[etapa] || form.default
    }

    return (
        <>
            <Stepper activeStep={etapa} >
                <Step><StepLabel>Login</StepLabel></Step>
                <Step><StepLabel>Pessoal</StepLabel></Step>
                <Step><StepLabel>Entrega</StepLabel></Step>
                <Step><StepLabel>Finalização</StepLabel></Step>
            </Stepper>
            {formularios(etapa)}
        </>
    )
}

// function Teste () {
//     const [teste, setTeste] = useState('')
//     return <>{}</>
// }