import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";
import svg from "../assets/svg";

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <Container>
        <Row>
          <Col md={6} className="footer-info">
            <h4>Contacto</h4>
            <p>La Banda, Santiago Del Estero, Argentina</p>
            <p>Email: rodrigojoaquinc89@gmail.com</p>
            <p>Teléfono: +54 385 6893228</p>
          </Col>
          <Col md={6} className="footer-social">
            <h4>Sígueme en las redes sociales</h4>
            <div className="social-icons">
              <a
                href="https://twitter.com/GyarkosRJC"
                target="_blank"
                rel="noopener noreferrer">
                {svg.Twitter}
              </a>
              <a
                href="https://www.instagram.com/rodrigojcaste/"
                target="_blank"
                rel="noopener noreferrer">
                {svg.Instagram}
              </a>
              <a
                href="https://www.linkedin.com/in/rodrigo-j-castellanos/"
                target="_blank"
                rel="noopener noreferrer">
                {svg.LinkedIn}
              </a>
              <a
                href="https://github.com/rodrigoc89"
                target="_blank"
                rel="noopener noreferrer">
                {svg.GitHubFooter}
              </a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center">
            <p className="footer-text">
              © 2023 Rodrigo j. Castellanos. Todos los derechos reservados.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
