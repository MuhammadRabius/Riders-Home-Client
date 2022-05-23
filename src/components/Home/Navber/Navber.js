import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navber = () => {
      return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand as={Link} to='/'>Home</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                  <Nav.Link as={Link} to='/'>Parts</Nav.Link>
                  <Nav.Link as={Link} to='/'>Blog</Nav.Link>
                  <NavDropdown title="Spare Parts" id="collasible-nav-dropdown">
                  <NavDropdown.Item as={Link} to='/'>Riders Gear & Accessories </NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/'>Parts</NavDropdown.Item>
                  <NavDropdown.Item as={Link} to='/'>Tyres and Helmets</NavDropdown.Item>
                  </NavDropdown>
            </Nav>
            <Nav>
                  <Nav.Link as={Link} to='/'>My Protfolio</Nav.Link>
                  <Nav.Link as={Link} to='/'>
                   Blog
                  </Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
      );
};

export default Navber;