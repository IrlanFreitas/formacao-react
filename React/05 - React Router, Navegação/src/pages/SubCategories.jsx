import React from 'react'
import ListPosts from '../components/ListPosts'
import { useParams } from 'react-router'

export default function SubCategories() {

    const { subcategoria } = useParams()

    return (
        <>
            <ListPosts ult={`/posts?subcategoria=${subcategoria}`} />
        </>
    )
}
