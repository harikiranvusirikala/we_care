import React from 'react'
import { Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationCoach = () => {
  return (
    <Navbar bg="dark" className="text-white">
      <Container>
        <Navbar.Brand className="text-white">WeCare</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavItem>
            <Link to="/coachViewProfile">View Profile</Link>
            </NavItem>
            {/* <Nav.Link href="/coachSchedules" className="text-white">Home</Nav.Link> */}
            <NavItem>
              <Link to="/coachSchedules">My Schedules</Link>
            </NavItem>
            <NavItem>
              Call Us: 080 2233447
            </NavItem>
            <NavItem>
              Logout
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavigationCoach