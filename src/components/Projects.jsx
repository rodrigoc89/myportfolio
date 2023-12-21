import React from "react";
import "../css/Projects.css";
import { projectsData } from "../../ProjectsData";
import svg from "../assets/svg";

function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Mis Proyectos</h2>
        <hr />
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
              <p className="project-tech">
                Tecnologías: <span>{project.techStack.join(" ")}</span>{" "}
              </p>
              {project.demoLink && project.sourceLink ? (
                <div className="project-links">
                  <a
                    className="project-icons"
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <span>{svg.Link}</span>
                  </a>
                  <a
                    className="project-icons"
                    href={project.sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {svg.GitHub}
                  </a>
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
