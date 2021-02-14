import React from 'react'
import './About.css'
import 'react-multi-carousel/lib/styles.css'
import Typical from 'react-typical'

const About = () => {
  return (
    <>
      <h1 id="about">
        <Typical steps={['About me', 1500]} loop={Infinity} wrapper="b" />
      </h1>
      <div className="dropdown-divider"></div>
    </>
  )
}

export default About
