import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
      return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                  <Nav.Link as={Link} to='/motorparts'>Motor Parts</Nav.Link>
                  <Nav.Link as={Link} to='/blog'>Blog</Nav.Link>
                  <Nav.Link as={Link} to='/myportfolio'>My Protfolio</Nav.Link>
            </Nav>
            <Nav>
                  
                  <Nav.Link as={Link} to='/'> Blog </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
      );
};

export default Navber;