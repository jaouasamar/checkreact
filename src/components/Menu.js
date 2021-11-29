import React, { Component } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";


class Menu extends Component {
    render() {
    return (
        <Navbar bg="dark" variant="dark">
        <Container>
        <Navbar.Brand href="#home">Navbar</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
        </Nav>
        </Container>
        </Navbar>
    );
    }
}

export default Menu;