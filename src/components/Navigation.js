import React, { Component } from 'react';
import { Button, Navbar, Container, Form, FormControl, Nav } from "react-bootstrap"
import { Link } from "react-router-dom";
class Navigation extends Component {
    render() {
        return (
            <>
                <Navbar bg="dark" expand="lg">
                    <Container>
                        <Navbar.Brand href="#home">Speen</Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Link className="nav-link" to="/">Startseite</Link>
                                <Link className="nav-link" to="/Stundenplan">Stundenplan</Link>
                                <Link className="nav-link" to="/third">Dritte Seite</Link>
                                <Link className="nav-link" to="/fourth">Vierte Seite</Link>
                                <Link className="nav-link" to="/fifth">Stundenplan 2</Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                                <Button variant="outline-success">Login</Button>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </>
        )
    }

}

export default Navigation;