import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import Contact from './components/Contact/Contact'

function App() {
  const [backgroundColor, setBackgroundColor] = useState({ color: '#3A3A3A' })

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor.color
  })

  // const changeColor = (color) => {
  //   setBackgroundColor({ color })
  // }

  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home} />
        <Route exact path="/home" component={Home} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  )
}

export default App
