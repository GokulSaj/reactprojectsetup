import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from "react-router-dom";

const Header = (props) => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Navbar.Brand as={Link} to="/home">Demo</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                {props.authStatus
                    ?
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/account">Account</Nav.Link>
                        <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
                    </Nav>
                    :
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/login">Login</Nav.Link>
                        <Nav.Link as={Link} to="/register">Register</Nav.Link>
                    </Nav>
                }
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;