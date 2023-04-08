import React from 'react'
import { NavDropdown, Navbar, Nav, Container } from 'react-bootstrap'

function Navigationbar() {
  return (
    <Navbar collapseOnSelect variant="dark" expand="sm" className="navbar navbar-light bg-dark">
    <Container>
      <Navbar.Brand href="#">CATS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="/">Cat Browser</Nav.Link>
          <Nav.Link href="/my-list">My List</Nav.Link>
        </Nav>
        {/* <Nav>
          <Nav.Link href="#deets">More deets</Nav.Link>
          <Nav.Link eventKey={2} href="#memes">
            Dank memes
          </Nav.Link>
        </Nav> */}
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Navigationbar
