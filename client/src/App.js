import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import NavBar from './components/NavBar/NavBar'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import './App.css'

function App() {
  const [backgroundColor] = useState({ color: '#3A3A3A' })

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor.color
  }, [backgroundColor.color])
  return (
    <Router>
      <>
        <NavBar />
        <main>
          <Route exact path="/" component={() => <Home />} />
          <Route path="/home" component={() => <Home />} />
          <Route path="/portfolio" component={() => <Portfolio />} />
          <Route path="/about" component={() => <About />} />
        </main>
        <footer className="footerContainer">
          <div className="footer"> © 2021 Nikolay Butnik</div>
        </footer>
      </>
    </Router>
  )
}

export default App
