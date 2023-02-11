import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <>
            <Navbar bg="primary" variant="light" expand="lg">
                <Container>
                    <Navbar.Brand as={Link} className='text-white' to="/">GARAGE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link as={Link} className='text-white' to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="/dashboard">Dashboard</Nav.Link>
                            <Nav.Link as={Link} className='text-white' to="/login">Login</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;