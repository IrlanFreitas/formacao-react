import React, { useState, useEffect } from 'react'
import ListCategories from '../components/ListCategories'
import ListPosts from '../components/ListPosts'
import { Route, Switch, useParams, useRouteMatch } from 'react-router'
import '../assets/css/blog.css'
// import useData from '../hook/useData'
import { getData } from "../services/api";
import { Link } from 'react-router-dom'
import SubCategories from './SubCategories'

const Category = () => {
    const { id } = useParams()
    const { url, path } = useRouteMatch()
    // const { data } = useData(`/categorias/${id}`, id)
    const [subcategorias, setSubCategorias] = useState([])

    useEffect(() => {
        getData(`/categorias/${id}`, (categoria) => {
            setSubCategorias(categoria.subcategorias)
        })
    }, [id])

    return (

        <>
            <div className="container">
                <h2 className="titulo-pagina">Pet Notícias</h2>
            </div>

            <ListCategories />

            <ul className="lista-categorias container flex">
                {subcategorias?.map(subcategoria => (
                    <li className={`lista-categorias__categoria lista-categorias__categoria--${id}`}
                        key={subcategoria}>
                        <Link to={`${url}/${subcategoria}`} >
                            {subcategoria}
                        </Link>
                    </li>
                ))}
            </ul>

            <Switch>
                <Route exact path={`${path}/`}>
                    <ListPosts url={`/posts?categoria=${id}`} />
                </Route>
                <Route path={`${path}/:subcategoria`}>
                    <SubCategories />
                </Route>
            </Switch>
        </>
    )
}

export default Category