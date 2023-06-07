import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import svg from "../assets/svg.jsx";

function NavbarHome() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#">
          {svg.PromptTerminal} Rodrigo J. Castellanos
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>{svg.Prompt} Developer Full Stack Jr.</Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarHome;
