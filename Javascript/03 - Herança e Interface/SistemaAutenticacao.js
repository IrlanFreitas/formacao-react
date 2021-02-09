/*
    * Ser autenticável significa ter a propriedade "senha"
    ! Foi modificado para método "autenticar" pois,
    ! quando se tem um propriedade que não existe o js 
    ! coloca como valor de retorno undefined porem, quando
    ! é chamado o método e ele não existe é retornado
    ! um erro
*/

export default class SistemaAutenticacao {

    static login(autenticavel, senha) {
        //* Ducky Typing
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha)
        }

        return false
    }

    static ehAutenticavel(autenticavel) {
        //? Verificando se a chave/método existe dentro do que foi recebido
        //? E checando se é função também
        //? Duas formas de fazer isso

        // return "autenticar" in autenticavel && typeof autenticavel.autenticar === "function"
        return "autenticar" in autenticavel && autenticavel.autenticar instanceof Function
    }

}