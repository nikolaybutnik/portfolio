/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useRef, useState } from 'react'
import './Home.css'

import Typical from 'react-typical'

import { IconContext } from 'react-icons'
import { BiDownArrow } from 'react-icons/bi'
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa'

import { Link } from 'react-scroll'

import { Document, Page, pdfjs } from 'react-pdf'
import 'react-pdf/dist/esm/Page/AnnotationLayer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`

const Main = () => {
  const [pdfScale, setPdfScale] = useState(0.8)
  const handleScaleIncrease = () => {
    setPdfScale(pdfScale + 0.1)
  }
  const handleScaleDecrease = () => {
    setPdfScale(pdfScale - 0.1)
  }

  // Change image source on avatar mouse hover.
  const avatarRef = useRef()
  const handleMouseEnter = () => {
    avatarRef.current.setAttribute('src', 'assets/images/avatar-silly.png')
  }
  const handleMouseLeave = () => {
    avatarRef.current.setAttribute('src', 'assets/images/avatar-default.png')
  }

  return (
    <>
      <div className="landingPage">
        <h1 id="myHome">
          <Typical
            steps={['Welcome.message()', 1500]}
            loop={Infinity}
            wrapper="b"
          />
        </h1>
        <hr className="solidDivider"></hr>

        <div className="backgroundContainer">
          <img
            className="hvr-glow"
            src="assets/images/avatar-default.png"
            alt="Profile"
            ref={avatarRef}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          />

          <div className="overlay">
            <h1>Hello world, I'm Nik</h1>
            <h1>
              I'm a
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
            </h1>
          </div>

          <div className="videoContainer">
            <video className="backgroundVideo" autoPlay loop muted>
              <source src="assets/background.mp4" type="video/mp4" />
            </video>
          </div>
        </div>

        <hr className="solidDivider"></hr>
        <Link to="landingPageAboutMe" smooth={true}>
          <IconContext.Provider
            value={{
              color: 'white',
              size: '45px',
            }}
          >
            <div className="arrowDown">
              <BiDownArrow />
            </div>
          </IconContext.Provider>
        </Link>

        {/* <div className="pageLinks">
          <a
            id="resume"
            href="https://drive.google.com/file/d/1AtypBF0fYdustOYBHz9Gel43MEyMPelN/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
          >
            getResume()
          </a>
          <a id="projects" href="/portfolio">
            getProjects()
          </a>
        </div> */}
      </div>

      <div className="landingPageAboutMe" name="landingPageAboutMe">
        <div className="aboutMeContent">
          <img src="assets/images/profile.png" alt="Profile"></img>
          <div className="aboutMeText">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a
              velit vitae tortor viverra cursus et vel turpis. Nam facilisis
              ligula quis ipsum interdum faucibus. In dictum orci vitae ante
              venenatis sagittis. Aliquam aliquam enim id porttitor ultricies.
              Nulla sit amet scelerisque odio. Ut interdum in orci in
              sollicitudin. Nam rhoncus quam quis ante luctus placerat.
            </p>
            <p>
              In rutrum vestibulum diam, et auctor diam convallis in. Sed
              venenatis mi nisl, ut auctor lacus tempus a. Donec egestas ornare
              mattis. Quisque ullamcorper id arcu vel congue. Vestibulum
              tincidunt molestie velit id pulvinar. Nam sollicitudin lacinia
              lorem, a egestas velit vehicula a. Vestibulum id elementum augue.
              Mauris hendrerit lacus non iaculis pharetra.
            </p>
          </div>
        </div>
        <div className="resume">
          <Document file="assets/resume.pdf" renderMode="svg">
            <Page pageNumber={1} scale={pdfScale} loading="Loading resume..." />
          </Document>

          {/* Using the PDF controls messes up Typical. 
          Rerender Typical if controls are used */}

          <div className="pdfControls">
            <IconContext.Provider
              value={{
                color: 'white',
                size: '25px',
              }}
            >
              <div className="increaseScale" onClick={handleScaleIncrease}>
                <FaPlusCircle />
              </div>
              <div className="decreaseScale" onClick={handleScaleDecrease}>
                <FaMinusCircle />
              </div>
            </IconContext.Provider>
          </div>
        </div>
      </div>

      <div className="landingPageContact"></div>

      <div className="footer"> © 2021 Nikolay Butnik</div>
    </>
  )
}

export default Main
