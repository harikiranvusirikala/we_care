import { Button, Col, Container, Nav, Navbar, NavItem, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const Home = () => {
  return (
    <>
      <Navigation />
      <h1>We are at the heart of appropriate care</h1>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="2">
            <Link to="/coachLogin"><Button>Login as a Coach</Button></Link>
            <br /><br />
            <Link to="/coachSignup"><Button>Join as a Coach</Button></Link>
          </Col>
          <Col xs lg="2">
            <Link to="/userLogin"><Button>Login as a User</Button></Link>
            <br /><br />
            <Link to="/userSignup"><Button>Join as a User</Button></Link>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Home;
