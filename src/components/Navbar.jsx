import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import React from "react";
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
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="#home" id="links">
                  Home
                </Nav.Link>
                {/* <Nav.Link href="#features" id="links">
                  About me
                </Nav.Link> */}
                <Nav.Link href="#pricing" id="links">
                  Contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
