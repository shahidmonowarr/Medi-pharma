import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../../../context/useAuth';

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand className="fs-3 fw-bold" href="#home">MediPharma</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">
                        <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                        <Nav.Link as={HashLink} to="/about">About Us</Nav.Link>
                        {user?.email ?
                            <Button onClick={logOut} variant="light" className="mx-3">Logout</Button>
                            :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                        <Navbar.Text>
                            Signed in as: <a href="#login"> {user?.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                    <Nav className="ms-auto">


                    </Nav>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;