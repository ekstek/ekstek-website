import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import logo from '../images/logo.png'

const NavBar = () => (
    <Navbar collapseOnSelect expand="lg" bg="transparent" variant="light">
  <Navbar.Brand href="#">
  <img
        src={logo}
        width="240"
        height="60"
        className="d-inline-block align-top"
        alt="ekstek logo"
      />
  </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto justify-content-end">
      <Nav.Link href="#features">Home</Nav.Link>
      <Nav.Link href="#pricing">About</Nav.Link>
      <Nav.Link href="#deets">Team</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default NavBar