import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
// import NavDropdown from 'react-bootstrap/NavDropdown'
// import Form from 'react-bootstrap/Form'
// import FormControl from 'react-bootstrap/FormControl'
// import Button from 'react-bootstrap/Button'
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
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
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

        {/* <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form> */}
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
