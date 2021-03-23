import React from 'react'
import { Link } from "react-router-dom";
import useData from '../hook/useData'

export default function ListPosts({ url }) {

    const { data } = useData(url)

    return (
        <section className="posts container">
            {data?.map(post =>
                <Link key={post.id} className={`cartao-post cartao-post--${post.categoria}`} to={`/post/${post.id}`}>
                    <article >
                        <h3 className="cartao-post__titulo" >
                            {post.title}
                        </h3>
                        <p className="cartao-post__meta">{post.metadescription}</p>
                    </article>
                </Link>)}
        </section >
    )
}
