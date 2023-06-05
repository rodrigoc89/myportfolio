import React from "react";
import "../css/Technologies.css";

function Technologies() {
  const technologies = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node.js",
    "PostgreSQL",
    "Sequelize",
    "Express",
  ];

  return (
    <section id="technologies" className="technologies">
      <div className="container">
        <h2 className="section-title">Tecnologías</h2>
        <hr />
        <ul className="technology-list">
          {technologies.map((technology, index) => (
            <li key={index} className="technology-item">
              {technology}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Technologies;
