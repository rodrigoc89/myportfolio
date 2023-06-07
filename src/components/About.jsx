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
              Permítanme presentarme, soy Rodrigo Joaquín Castellanos, un
              Desarrollador Full Stack Jr. de 33 años proveniente de Santiago
              del Estero, Argentina. He obtenido mi formación como programador
              en el bootcamp de Plataforma 5, donde adquirí habilidades en
              JavaScript y React, así como también he completado otros cursos
              relacionados.
            </p>
            <p>
              Además de mis conocimientos en desarrollo backend y frontend, y mi
              experiencia con GitHub, he desarrollado habilidades
              interpersonales como la comunicación efectiva, el pensamiento
              crítico y el trabajo en equipo. También he trabajado con
              metodologías ágiles como Scrum y he utilizado herramientas como
              Figma y Trello para la gestión de proyectos.
            </p>
            <p>
              Estoy apasionado por el desarrollo de aplicaciones y siempre estoy
              buscando oportunidades para aprender y crecer en esta industria
              dinámica. Estoy emocionado por contribuir con mi experiencia y
              habilidades en proyectos desafiantes.
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
