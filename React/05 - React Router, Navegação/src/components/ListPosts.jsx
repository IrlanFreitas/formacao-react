import React, { useEffect, useState } from 'react'
import { getData } from "../services/api";
import { Link } from "react-router-dom";

export default function ListPosts({ url }) {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        getData(url, setPosts)
    }, [setPosts, url])

    return (
        <section className="posts container">
            {posts?.map(post =>
                <Link className={`cartao-post cartao-post--${post.categoria}`}>
                    <article key={post.id}>
                        <h3 className="cartao-post__titulo" >
                            {post.title}
                        </h3>
                        <p className="cartao-post__meta">{post.metadescription}</p>
                    </article>
                </Link>

            )}
        </section>
    )
}
