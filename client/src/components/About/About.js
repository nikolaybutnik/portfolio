import React from 'react'
import './About.css'
import Typical from 'react-typical'

const About = () => {
  return (
    <>
      <h1 id="about">
        <Typical steps={['About me', 1500]} loop={Infinity} wrapper="b" />
      </h1>
      <div className="dropdown-divider"></div>
      <div className="container">
        <div className="row">
          <div className="col">
            <img src="" alt="" />
          </div>
          <div className="col">
            <p></p>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
