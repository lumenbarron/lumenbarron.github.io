import React from 'react';
//import {Link} from 'react-router-dom';
import lucyName from './Images/lucyName.png';
import './home.css';

export class Nav extends React.Component {
  render() {
    return (
      <header className="header-nav">
        <section>
          <img src={lucyName} className="lucy-name" alt="lucyname" />
        </section>
        <nav>
          <a className="header-nav-a" href="#portafolio">
            PORTAFOLIO
          </a>
          <a className="header-nav-a" href="" target="_blank">
            ACERCA DE...
          </a>
          <a className="header-nav-a" href="#contact">
            CONTACTAME
          </a>
        </nav>
      </header>
    );
  }
}