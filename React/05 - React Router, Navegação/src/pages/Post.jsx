import React from 'react'
import { useParams } from 'react-router'
import useData from '../hook/useData'
import '../assets/css/post.css'

export default function Post() {
    const { id } = useParams()

    const { data } = useData(`/posts/${id}`)

    return (
        <main className="container flex flex--centro">
            <article className="cartao post">
                <h2 className="cartao__titulo">{data.titulo}</h2>
                <p className="cartao__texto" >{data.body}</p>
            </article>
        </main>
    )
}
