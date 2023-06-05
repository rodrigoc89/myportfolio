import React from "react";
import "../css/Projects.css";
import { projectsData } from "../../ProjectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="project-list">
          {projectsData.map((project) => (
            <div className="project-item" key={project.id}>
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-links">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    Demo
                  </a>
                  <a
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer">
                    Código fuente
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
