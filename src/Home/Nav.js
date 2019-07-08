import React from 'react';
import {Link} from 'react-router-dom';
import lucylogo from './Images/lucy-name-logo.png'
import lucyName from './Images/lucyName.png';
import './home.css';

export class Nav extends React.Component{

  render (){
    return (
        <header className="header-nav" >
            <section>
            <img src={lucyName} className="lucy-name" alt="lucyname" />
            </section>
            <nav>
            <a className="header-nav-a" target="_blank"> PORTAFOLIO </a>
            <a className="header-nav-a" target="_blank"> ACERCA DE... </a>
            <a className="header-nav-a" target="_blank"> CONTACTAME </a>
            {/* <Link to='/waiter' className="" > PORTAFOLIO </Link>
            <Link to='/waiter' className="" > ACERCA DE... </Link>
            <Link to='/waiter' className="" > CONTACTAME </Link> */}
            </nav>
          
        </header>
    );
  }
}