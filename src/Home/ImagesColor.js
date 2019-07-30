import React from 'react';
import './styles/projects.css';

const ImagesColor = props => (
  <section className="project-container-info share-smile">
    <section className="project-text">
      <p className="project-text-titles">{props.titleProject}</p>
      <p className="project-text-info">
      {props.descriptionProject}
      </p>

      <p className="project-text-titles">TECHNOLOGIES</p>
      <p className="project-text-info">{props.descriptionTech}</p>

      <a
        href={props.reference}
        target="_blank"
        className="images-menu-links"
        rel="noopener noreferrer"
      >
        VISIT SITE
      </a>
    </section>

    <section className="project-images">
      <section id={props.idBtn} />
    </section>
  </section>
);

export default ImagesColor