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
              "Permítanme presentarme, soy Rodrigo Joaquín Castellanos, un
              Desarrollador Full Stack Jr. proveniente de Santiago del Estero,
              Argentina. Comencé mi formación durante la pandemia, incursionando
              de manera autodidacta, hasta que me animé a participar en el
              bootcamp intensivo de Plataforma 5. En este bootcamp adquirí
              habilidades en el desarrollo frontend, backend y en el manejo de
              GitHub."
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
              buscando oportunidades para aprender y crecer en esta industria.
              Estoy emocionado por contribuir con mi experiencia y habilidades
              en proyectos desafiantes.
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
