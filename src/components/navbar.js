import React from 'react'
import {Navbar} from 'react-bootstrap'
import {Nav} from 'react-bootstrap'
import logo from '../images/logo.png'
import '../styles/navbar.css'

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
    <Nav>
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#">About</Nav.Link>
      <Nav.Link href="#">Team</Nav.Link>
      <Nav.Link eventKey={2} href="#">
        Contact
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
)

export default NavBar