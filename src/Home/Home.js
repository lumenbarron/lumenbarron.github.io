import React from 'react';
import {HeaderHome} from './HeaderHome';
import {Menu} from './Menu';
import {Nav} from './Nav';
import {FooterHome} from './FooterHome';

export class Home extends React.Component {
  render() {
    return (
      <section className="home-container">
        <HeaderHome />
        <Nav />
        <Menu />
        <FooterHome />
      </section>
    );
  }
}