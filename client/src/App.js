import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidenav from './components/Sidenav/Sidenav'
import Home from './components/Home/Home'
import Portfolio from './components/Portfolio/Portfolio'

function App() {
  const [backgroundColor, setBackgroundColor] = useState({ color: '#3A3A3A' })

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
              <Route exact path="/" component={(props) => <Home />} />
              <Route path="/home" component={(props) => <Home />} />
              <Route path="/portfolio" component={(props) => <Portfolio />} />
            </main>
          </React.Fragment>
        )}
      />
    </Router>
  )
}

export default App
