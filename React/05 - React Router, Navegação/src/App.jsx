import React from 'react'
import './assets/css/base/base.css'
import { BrowserRouter as Router } from "react-router-dom";
// import Home from './pages/Home'
// import Sobre from './pages/Sobre'
import Routes from './routes/routes'
import './assets/css/base/base.css'
import Header from './components/Header'

function App() {

  return (
    <>
      <Router>
        <Header />
        <Routes />
      </Router>
    </>
  )
}

export default App
