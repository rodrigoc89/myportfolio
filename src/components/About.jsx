import React from "react";
import "../css/About.css";

function About() {
  return (
    <section id="about" className="about">
      <div className="about-content">
        <h2>Acerca de mí</h2>
        <div className="about-info">
          <div className="about-image">
            <img src="https://i.postimg.cc/7hRsk2L1/IMG-20220616-201553-978.jpg" alt="Mi foto" className="my-photo" />
          </div>
          <div className="about-text">
            <p>
              Soy un desarrollador web con experiencia en tecnologías como HTML,
              CSS, JavaScript y React. Me encanta crear sitios web y
              aplicaciones que sean funcionales, atractivas y fáciles de usar.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
