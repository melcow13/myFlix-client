import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import "../navbar/navbar.scss"
export function Menubar({ user }) {

    const onLoggedOut = () => {
        localStorage.clear();
        window.open('/login', '_self');
    };

    const isAuth = () => {
        if (typeof window == "undefined") {
            return false;
        }
        if (localStorage.getItem("token")) {
            return localStorage.getItem("token");
        } else {
            return false;
        }
    };

    return (
        <Navbar className="navbar" bg="black" variant="dark">
            <Container>
            <Navbar.Brand className="navbar-logo" href="/" >
            <img
              alt=""
              src="/redlogo.svg"
              width="60"
              height="60"
              className="d-inline-block"
            />{' '}
           Marvel Movie Universe
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="ml-auto" style={{color:"white"}}>
                    {isAuth() && (
                        <Nav.Link href={`/users/${user}`}>
                            Profile
                        </Nav.Link>
                    )}
                    {isAuth() && (
                        <Nav.Link href="/">
                            Home
                        </Nav.Link>
                    )}

                    {isAuth() && (
                        <Button variant="link" onClick={() => {
                            onLoggedOut()
                        }}>Logout</Button>
                    )}
                    {!isAuth() && (
                        <Nav.Link href="/login">
                            Sign-in
                        </Nav.Link>
                    )}
                    {!isAuth() && (
                        <Nav.Link href="/register">
                            Sign-up
                        </Nav.Link>
                    )}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

