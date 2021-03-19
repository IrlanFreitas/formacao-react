import React from 'react'
import doguito404 from "../assets/img/doguito404.svg";
import '../assets/css/404.css'

export default function NotFound() {
    return (
        <main className="container flex flex--centro flex--coluna">
            <img className="doguito-imagem" src={doguito404} alt="Imagem para página não encontrada" />
            <p className="naoencontrado-texto">
                Ops, Essa página não existe!
            </p>
        </main>
    )
}
