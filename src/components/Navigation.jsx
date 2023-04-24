import React from 'react'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';

const Navigation = () => {
  return (
    <Navbar bg="dark" className="text-white">
      <Container>
        <Navbar.Brand className="text-white">WeCare</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
              Call Us: 080 2233447
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation