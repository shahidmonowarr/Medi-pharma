import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold" href="#home">MediPharma</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        {/* {user?.email ?
                            <Button onClick={logOut} variant="light" className="mx-3">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName}</a>
                        </Navbar.Text> */}
                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;