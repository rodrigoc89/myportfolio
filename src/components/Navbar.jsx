import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

import "../css/navbar.css";

import Loaded from "./Loaded";
import "../css/Navbar.css";

const NavbarHome = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="md" fixed="top">
        <Container fluid>
          <Navbar.Brand href="#Home">
            <Loaded />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="offcanvasNavbar-expand-md" />
          <Navbar.Offcanvas
            id="offcanvasNavbar-expand-md"
            aria-labelledby="offcanvasNavbarLabel-expand-md"
            placement="end">
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id="offcanvasNavbarLabel-expand-md">
                <Loaded />
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" id="links">
                  Home
                </Nav.Link>
                <Nav.Link href="#features" id="links">
                  About me
                </Nav.Link>
                <Nav.Link href="#pricing" id="links">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      {/* <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <Loaded />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
    </>
  );
};

export default NavbarHome;
