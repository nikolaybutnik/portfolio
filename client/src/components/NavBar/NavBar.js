import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import './NavBar.css'

const NavBar = () => {
  return (
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
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
