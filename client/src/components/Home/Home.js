/* eslint-disable react/jsx-no-comment-textnodes */
import React from 'react'
import Typical from 'react-typical'
import './Home.css'

const Main = () => {
  return (
    <>
      <h1 id="myHome">
        <Typical
          steps={['Welcome.message()', 1500]}
          loop={Infinity}
          wrapper="b"
        />
      </h1>

      <div className="landingPage">
        <hr className="solidDivider"></hr>
        <div className="backgroundContainer">
          <img
            className="hvr-glow"
            id="profilePhoto"
            src="assets/images/avatar-default.png"
            alt="Profile headshot"
          />
        </div>
        <hr className="solidDivider"></hr>

        <h1 className="text-center" id="greeting">
          // Hello world, I'm Nik
        </h1>

        <h2 className="text-center" id="dynamicTyping">
          // I'm a
          <Typical
            steps={[
              ' full stack web developer',
              1500,
              ' tech enthusiast',
              1500,
              ' lifelong learner',
              1500,
              ' creative problem solver',
              1500,
              'n unshakable optimist',
              1500,
            ]}
            loop={Infinity}
            wrapper="b"
          />
        </h2>

        <div className="landingPageContent">
          <a
            id="resume"
            href="https://drive.google.com/file/d/1AtypBF0fYdustOYBHz9Gel43MEyMPelN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            <Typical
              steps={['getResume()', 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </a>
          <a id="projects" href="/portfolio">
            <Typical
              steps={[500, 'getProjects()', 2000]}
              loop={Infinity}
              wrapper="b"
            />
          </a>
        </div>
      </div>

      <div className="landingPageAboutMe"></div>

      <div className="landingPageContact"></div>

      <div className="footer"> © 2021 Nikolay Butnik</div>
    </>
  )
}

export default Main
