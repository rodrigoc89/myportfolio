import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import Loaded from "./Loaded";
import "./css/navbar.css";

const NavbarHome = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <Loaded />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">
              <p>Home</p>
            </Nav.Link>
            <Nav.Link href="#features">
              <p>About me</p>
            </Nav.Link>
            <Nav.Link href="#pricing">
              <p>Contacto</p>
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarHome;
