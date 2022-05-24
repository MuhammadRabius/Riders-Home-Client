import React from 'react';
import { Container, Nav, Navbar} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';

const Navber = () => {
      const [user]=useAuthState(auth);
      const navigate=useNavigate();
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

                  {
                        user&& 
                         <Nav.Link as={Link} to='/dashboard'>Dashboard</Nav.Link>
                  }
            </Nav>
            {
                              user?
                              <button onClick={()=>{
                                    signOut(auth)
                                    navigate('/login');
                              
                              }} className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 '>Sing Out</button>
                              :
                              <Nav.Link className='border-2 rounded-lg p-2 mx-2 text-black hover:bg-blue-400 ' as={Link} to='/login'>Login</Nav.Link>
                        }
            </Navbar.Collapse>
            </Container>
            </Navbar>
      );
};

export default Navber;