export function validarCPF(cpf) {
    return cpf.length !== 11 ? defaultError(false, 'CPF Deve ter 11 dígitos') : defaultError()
}

export function validarSenha(senha) {
    return senha.length < 4 || senha.length > 72 ?
        defaultError(false, 'Senha deve ter entre 4 e 72 dígitos') : defaultError()
}

export function validarNome(nome) {
    return nome.length < 4 || nome.length > 72 ?
        defaultError(false, 'Nome deve ter entre 4 e 72 dígitos') : defaultError()
}

//! Foi ajustado para dentro do Hook Customizado
export const defaultError = (valid = true, message = '') => ({
    valid, message
})


//! Foi ajustado para dentro do Hook Customizado
// export const canNext = (errors) => {
//     for (let field in errors) {
//         if (!errors[field].valid) {
//             return false;
//         }
//     }
//     return true;
// }

//! Foi ajustado para dentro do Hook Customizado
// export const validarCampos = ({ target: { name, value } }, setErrors, validacoes) => {
//     setErrors(prevState => ({ ...prevState, [name]: validacoes[name](value) }))
// }