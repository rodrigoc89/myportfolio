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
            Permítanme presentarme, mi nombre es Rodrigo Joaquín Castellanos, tengo 33 años y soy de Santiago del Estero, Argentina. Me desempeño como Desarrollador Full Stack Jr. Realicé mi formación como programador en el bootcamp de Plataforma 5, además de haber completado otros cursos de JavaScript y React.
            </p>
            <p>
              Además de adquirir conocimientos sobre backend, front y GitHub, también desarrollé habilidades blandas como la comunicación efectiva, el pensamiento crítico, el trabajo en equipo, el uso de Scrum y trabajé con Figma y Trello.
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
