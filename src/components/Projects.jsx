import React from "react";
import "../css/Projects.css";
import { projectsData } from "../../ProjectsData";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <div className="projects-list">
          {projectsData.map((project, index) => (
            <div key={index} className="project-card">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <p className="project-tech">Tecnologías: {project.techStack}</p>
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
