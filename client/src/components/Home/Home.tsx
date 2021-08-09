import React, { useRef } from 'react'
import '../../css/Home.css'

import Resume from './Resume/Resume'

import { IconContext } from 'react-icons'
import { BiDownArrow } from 'react-icons/bi'

import { Link } from 'react-scroll'

import Typical from 'react-typical'

const Home = () => {
  // Change image source on avatar mouse hover.
  const avatarRef = useRef<HTMLImageElement>(null)
  const handleMouseEnter = () => {
    if (avatarRef.current !== null) {
      avatarRef.current.setAttribute('src', 'assets/images/avatar-silly.png')
    }
  }
  const handleMouseLeave = () => {
    if (avatarRef.current !== null) {
      avatarRef.current.setAttribute('src', 'assets/images/avatar-default.png')
    }
  }

  return (
    <>
      <div className="landingPage">
        <h1 id="myHome">
          <Typical steps={['Welcome', 1500]} loop={Infinity} wrapper="b" />
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
        <Link to="landingPageAboutMe" smooth={false} offset={-50}>
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
      </div>

      <div className="landingPageAboutMe" data-name="landingPageAboutMe">
        <div className="aboutMeContent">
          <img src="assets/images/profile.png" alt="Profile"></img>
          <div className="aboutMeText">
            <p>
              Hey, I'm Nik, a full stack web developer with a background in
              construction and an interest in all things tech.
            </p>
            <p>
              I'm a relentless pursuer of personal and career growth, and a
              strong believer that effort will always trump talent. I pride
              myself on my ability to pick up any skill I need to achieve my
              goals. I tackle new challenges with enthusiasm, and love the
              feeling of overcoming a difficult obstacle.
            </p>
            <p>
              Studying code has been one of the best decisions I've ever made,
              and allows me to tackle challenges I never thought possible. If
              you share my enthusiasm, please feel free to reach out through the
              social media links in the header.
            </p>
          </div>
        </div>
        <Resume />
      </div>

      <div className="landingPageContact"></div>
    </>
  )
}

export default Home
