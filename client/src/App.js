import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidenav from './components/Sidenav/Sidenav'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'

function App() {
  const [backgroundColor] = useState({ color: '#3A3A3A' })

  useEffect(() => {
    document.body.style.backgroundColor = backgroundColor.color
  })
  return (
    <Router>
      <Route
        render={({ location, history }) => (
          <React.Fragment>
            <Sidenav location={location} history={history} />
            <main>
              <Route exact path="/" component={() => <Home />} />
              <Route path="/home" component={() => <Home />} />
              <Route path="/portfolio" component={() => <Portfolio />} />
              <Route path="/about" component={() => <About />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  )
}

export default App
