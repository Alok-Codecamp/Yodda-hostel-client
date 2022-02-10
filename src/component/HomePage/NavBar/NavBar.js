import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div>
            <Navbar bg="success" expand="lg">
  <Container fluid>
    <Navbar.Brand className='text-light fw-bold' href="#">Yodda Hostel</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="ms-auto my-2 my-lg-0"
        style={{ maxHeight: '100px',}}
        navbarScroll
      >
        <Link className='me-4 text-decoration-none fw-bold text-light' to="/home">Home</Link>
        <Link className='me-4 text-decoration-none fw-bold text-light' to="/student">student</Link>
        <Link className='me-4 text-decoration-none fw-bold text-light' to="/admin">Admin</Link>
        
      </Nav>
     
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default NavBar;