import React from "react";
import "../css/About.css";

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">Acerca de mí</h2>
        <hr />
        <div className="about-content">
          <div className="about-text">
            <p>
              Soy un desarrollador web con experiencia en tecnologías como HTML,
              CSS, JavaScript y React. Me apasiona crear soluciones web que sean
              intuitivas, elegantes y centradas en el usuario.
            </p>
            <p>
              Me encanta aprender y estar al día con las últimas tendencias y
              tecnologías del desarrollo web. Estoy disponible para nuevos
              proyectos y oportunidades laborales.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://i.postimg.cc/7hRsk2L1/IMG_20220616_201553_978.jpg"
              alt="Foto de perfil"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
