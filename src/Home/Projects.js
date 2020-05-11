import React from 'react';
import './styles/projects.css';
//import {scroll} from './Images/scroll.png'
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
            idBtn="starbucks-image"
            titleProject="STARBUCKS STORE"
            descriptionProject="If you, like me, are a Starbucks fan, you have to know the coolest Starbucks Stores around the world,
             and the best, if you know any, add it and let us know."
            descriptionTech="REACT JS | MONGO DB | EXPRESS | NODE JS | JAVASCRIPT | AXIOS | API REQUEST | SCRUM | GIT | HEROKU | UX/UI | MATERIALIZE FRAMEWORK"
            reference="https://starbucks-store.herokuapp.com/"
          />

        <ImagesColor
            backgroundColor = "project-container-info hide pixar"
            idBtn="pixar-image"
            titleProject="PIXAR EN CORTO"
            descriptionProject="Do you know that Pixar, besides makes incredible movies, 
            makes amazing short films? Check out the best collection and inspire your days."
            descriptionTech="REACT JS | HTML5 | CSS3 | JAVASCRIPT | AXIOS | API REQUEST | SCRUM | GIT | GITHUB | UX/UI | MATERIALIZE FRAMEWORK"
            reference="https://lumenbarron.github.io/pixar/"
          />

          <ImagesWhite
            idBtn="pokemon-image"
            titleProject="POKEMON BE.GIRL.NERS"
            descriptionProject="If you like Pokemon but you don’t know too much about that,
            this web app helps you to know information about the pokemon by its type or searching by its name."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | JEST | MOCKA | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY "
            reference="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
          />
 
            <ImagesColor
            backgroundColor = "project-container-info hide share-smile"
            idBtn="share-image"
            titleProject="SHARE A SMILE "
            descriptionProject="What happens with children's items when they grow up? This is a social media web-app focus on
            connecting mothers who want to sell, buy or donate children's items."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | REACT JS  | ROUTER | SPA | FIREBASE |  SCRUM |KANBAN | GIT | GITHUB | UX/UI | FOUNDATION FRAMEWORK"
            reference="https://karlyvall.github.io/GDL002-social-network/public/#access-screen"
          />

            <ImagesWhite
            idBtn="bikely-image"
            titleProject="BIKELY"
            descriptionProject="Imagine that you're biking and have an unexpected event. You need to change some piece of your
             bike or repair it; Bikely app shows the stores near your location."
            descriptionTech="REACT NATIVE | REACT NAVIGATION | EXPO | SCRUM |KANBAN | GIT | GITHUB | AGILE METHODOLOGY | UX/UI"
            reference="https://expo.io/@lumenbarron/example"
          />

            <ImagesColor
            backgroundColor = "project-container-info hide il-piccolo"
            idBtn="il-piccolo-image"
            titleProject="IL PICCOLO"
            descriptionProject="The Italian restaurant “Il Piccolo” needed a web app for its personal, to take the orders and shows in
            the kitchen to cook it. Also, all the information is saved in a database. "
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | REACT JS | FIRABASE | SCRUM |KANBAN | GIT | GITHUB | UX/UI | BOOTSTRAP FRAMEWORK"
            reference="https://lumenbarron.github.io/GDL002-burger-queen/"
          />

            <ImagesWhite
            idBtn="foodmap-image"
            titleProject="FOOD MAPS"
            descriptionProject="Have you ever had arrived in a new city or place and don´t know what are the best and tasty restaurants near?
             This web app shows you the restaurants and also  GDL´s eating places recommendations."
            descriptionTech="HTML5 | CSS3 | JAVASCRIPT | API GOOGLE MAPS |KANBAN | GIT | GITHUB | AGILE METHODOLOGY"
            reference="https://lumenbarron.github.io/gdl-open-house/"
          />

        </section>
      </section>
    );
  }
}
