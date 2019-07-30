import React from 'react';
import {HeaderHome} from './HeaderHome';
//import {Menu} from './Menu';
import {Projects} from './Projects'
import {Nav} from './Nav';
import {KnowMe} from './KnowMe'
import {FooterHome} from './FooterHome';


export class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <Nav />
        <HeaderHome />
        <KnowMe />
        <Projects />
        <FooterHome />
      </section>
    );
  }
}