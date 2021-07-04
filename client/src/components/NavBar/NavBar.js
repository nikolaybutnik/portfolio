import React, { useRef, useEffect } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

const NavBar = () => {
  const navRef = useRef()

  useEffect(() => {
    const sticky = navRef.current.offsetTop
    window.onscroll = () => {
      stickyNav()
    }
    const stickyNav = () => {
      if (window.pageYOffset > sticky) {
        navRef.current.classList.add('sticky')
      } else {
        navRef.current.classList.remove('sticky')
      }
    }
  })

  return (
    <nav ref={navRef}>
      <Navbar expand="md">
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="hvr-underline-from-left" href="/home">
              Home
            </Nav.Link>
            <Nav.Link className="hvr-underline-from-left" href="/portfolio">
              Projects
            </Nav.Link>
          </Nav>
          <div className="externalLinks">
            <a
              href="https://www.linkedin.com/in/nikolay-butnik/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="navIcon"
                src="assets/images/linkedinIconNav.png"
                alt="Twitter"
              />
            </a>
            <a
              href="https://github.com/nikolaybutnik"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="navIcon"
                src="assets/images/githubIconNav.png"
                alt="GitHub"
              />
            </a>
            <a
              href="https://twitter.com/nikolaybutnik"
              target="_blank"
              rel="noreferrer"
            >
              <img
                className="navIcon"
                src="assets/images/twitterIconNav.png"
                alt="Twitter"
              />
            </a>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </nav>
  )
}

export default NavBar
