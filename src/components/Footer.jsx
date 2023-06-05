import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../css/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
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
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
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
