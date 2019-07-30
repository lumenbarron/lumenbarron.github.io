import React from 'react';
import './styles/projects.css';

const ImagesWhite = props => (
  <section className="project-container-info">
    <section className="project-images">
      <section id={props.idBtn} />
    </section>

    <section className="project-text">
      <p className="project-text-titles">{props.title-project}</p>
      <p className="project-text-info">
      {props.description-project}
      </p>

      <p className="project-text-titles">TECHNOLOGIES</p>
      <p className="project-text-info">{props.description-tech}</p>

      <a
        href={props.reference}
        target="_blank"
        className="images-menu-links"
        rel="noopener noreferrer"
      >
        VISIT SITE
      </a>
    </section>
  </section>
);

export default ImagesWhite