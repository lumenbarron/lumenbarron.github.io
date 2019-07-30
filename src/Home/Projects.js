import React from 'react';
import './styles/projects.css';
//import ImagesButton from './ImagesButton'
import {ImagesWhite} from './ImagesWhite'

export class Projects extends React.Component {
  render() {
    return (
      <section id="portafolio" className="project-all">
        <h3 className="titles">PORTAFOLIO</h3>
        <section className="project-container">

        <section  className="project-container-info">

        <section className="project-images">
          <section id="pokemon-image" />
        </section>

        <section className="project-text">
          <p className="project-text-titles">POKEMON BE.GIRL.NERS</p>
          <p className="project-text-info">
          If you like Pokemon but you don’t know too much about that,
           this web app helps you to know information about the pokemon
            by its type or searching by its name.
          </p>

          <p className="project-text-titles">TECHNOLOGIES</p>
          <p className="project-text-info">
          HTML5 | CSS3 | JAVASCRIPT | JEST | MOCKA | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY 
          </p>

          <a
          href="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
          target="_blank"
          className="images-menu-links"
          rel="noopener noreferrer"
        >
          VISIT SITE
        </a>

        </section>



      </section>

      <ImagesWhite
      idBtn="pokemon-image"
      title-project="POKEMON BE.GIRL.NERS"
      description-project="If you like Pokemon but you don’t know too much about that,
      this web app helps you to know information about the pokemon
       by its type or searching by its name."
       description-tech="HTML5 | CSS3 | JAVASCRIPT | JEST | MOCKA | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY "
       reference="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
      />


        </section>
      </section>
    );
  }
}
