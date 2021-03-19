import React from 'react'
import ListPosts from '../components/ListPosts'

const Home = () => {

  return (
    <main>

      <div className="container">
        <h2 className="titulo-pagina">Pet notícias</h2>
      </div>

      <ListPosts url="/posts" />


    </main>
  )
}

export default Home
