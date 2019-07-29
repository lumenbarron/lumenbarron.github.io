import React from 'react';
import './home.css';

export class HeaderHome extends React.Component {
  render() {
    return (
      <header id="home" className="lucy-header-container">
          <section className="lucy-header-text">
            <h2>Hola! </h2>
            <br/>
            <p >Es un gusto verte por aquí. Me presento, mi nombre es Lucy y
          soy desarrolladora front end y diseñadora industrial.
          Me encanta la tecnología y crear productos
          que mejoren la vida de las personas a través
           de ella.</p>
          </section>
          <section className="lucy-header">
          <img id='lucyBanner'/>
          </section>

      </header>
    );
  }
}

