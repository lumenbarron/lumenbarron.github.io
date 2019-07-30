import React from 'react';
import './styles/projects.css';
import {scroll} from './Images/scroll.png'
//import ImagesButton from './ImagesButton'
import ImagesWhite from './ImagesWhite'
import ImagesColor from './ImagesColor'

export class Projects extends React.Component {
  render() {
    return (
      <section id="portafolio" className="project-all">
        <h3 className="titles">
          PORTFOLIO <i className="material-icons"></i>
        </h3>
        <section className="project-container">
          <ImagesWhite
            idBtn="pokemon-image"
            titleProject="POKEMON BE.GIRL.NERS"
            descriptionProject="If you like Pokemon but you don’t know too much about that,
            this web app helps you to know information about the pokemon by its type or searching by its name."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | JEST | MOCKA | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY "
            reference="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
          />
 
            <ImagesColor
            idBtn="share-image"
            titleProject="SHARE A SMILE "
            descriptionProject="What happens with children's items when they grow up? This is a social media web-app focus on
            connecting mothers who want to sell, buy or donate children's items."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | REACT JS  | ROUTER | SPA | FIREBASE |  SCRUM |KANBAN | GIT | GITHUB | UX/UI"
            reference="https://karlyvall.github.io/GDL002-social-network/public/#access-screen"
          />

            <ImagesWhite
            idBtn="bikely-image"
            titleProject="BIKELY"
            descriptionProject="Imagine that you're biking and have an unexpected event. You need to change some piece of your
             bike or repair it; Bikely app shows the stores near your location"
            descriptionTech="REACT NATIVE | REACT NAVIGATION | EXPO | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY | UX/UI"
            reference="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
          />

            <ImagesColor
            idBtn="share-image"
            titleProject="SHARE A SMILE "
            descriptionProject="What happens with children's items when they grow up? This is a social media web-app focus on
            connecting mothers who want to sell, buy or donate children's items."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | REACT JS  | ROUTER | SPA | FIREBASE |  SCRUM |KANBAN | GIT | GITHUB | UX/UI"
            reference="https://karlyvall.github.io/GDL002-social-network/public/#access-screen"
          />

        </section>
      </section>
    );
  }
}
