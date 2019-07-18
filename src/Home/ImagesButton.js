import React from 'react';
import './home.css';

const ImagesButton = props => (
    <button
      type="image"
      className={props.sizeImage}
      id={props.idBtn}
    >
      <section className={props.sizeText}>
        <h3 className="images-menus-title">{props.title}</h3>
        <h4>{props.description}</h4>
        <br />
        <a
          href={props.reference}
          target="_blank"
          className="images-menu-links"
          rel="noopener noreferrer"
        >
          Ir al sitio
        </a>
      </section>
    </button>
  );

export default ImagesButton