import { useState } from 'react'

export default function useErrors(validacoes) {

    const [errors, setErrors] = useState(createInitialState(validacoes))

    const validateFields = ({ target: { name, value } }) => {
        setErrors(prevState => ({ ...prevState, [name]: validacoes[name](value) }))
    }

    const canNext = () => {
        for (let field in errors) {
            if (!errors[field].valid) {
                return false;
            }
        }
        return true;
    }

    return {
        errors, validateFields, canNext
    }
}

function createInitialState(validacoes) {
    const initialState = {}
    for (const field in validacoes) {
        initialState[field] = defaultError()
    }

    return initialState
}

const defaultError = (valid = true, message = '') => ({
    valid, message
})
