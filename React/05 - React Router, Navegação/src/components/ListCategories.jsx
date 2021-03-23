import React from 'react'
import { Link } from "react-router-dom";
import useData from '../hook/useData'
import '../assets/css/blog.css'

export default function ListCategories() {

    const { data } = useData('/categorias')

    console.log({ data })

    return (
        <ul className="lista-categorias container flex">
            {data?.map((data, index) =>
                <Link key={`${index}--${data.id}`} to={`/categoria/${data.id}`}>
                    {console.log(`${index}--${data.id}`)}
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${data.id}`}>
                        {data.nome}
                    </li>
                </Link>
            )}
        </ul>
    )
}
