import React from 'react';
//import {Link} from 'react-router-dom';
//import lucyName from './Images/lucyName.png';
import './styles/nav.css';

export class Nav extends React.Component {
  render() {
    return (
      <header className="header-nav">
        {/* <section>
          <img src={lucyName} className="lucy-name" alt="lucyname" />
        </section> */}

        <a id='logo-lucy' href="#home" />
        <nav>
          <a className="header-nav-a" href="#portafolio">
            PORTFOLIO
          </a>
 
          <a className="header-nav-a" href="#know-me">
            KNOW ME
          </a> 
          
          <a className="header-nav-a" href="#contact">
            HIRE ME !
          </a>
        </nav>
      </header>
    );
  }
}