import React from 'react';
import './home.css';

export class HeaderHome extends React.Component {
  render() {
    return (

      <header className="lucy-header-container">
        <section className="lucy-header">
          <section className="lucy-header-text">
            <h2>Hola! </h2>
            <p >Me encanta verte por aquí. Me presento, mi nombre es Lucy,
          soy desarrolladora front end y diseñadora.
          Me encanta la tecnología y crear productos
          que mejoren la vida de las personas a través
           de ella</p>
          </section>
        </section>
      </header>

    );
  }
}

