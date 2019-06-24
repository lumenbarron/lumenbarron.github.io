import React from 'react';
import {HeaderHome} from './Home/HeaderHome';
import {Menu} from './Home/Menu';
import {Nav} from './Home/Nav';
import {FooterHome} from './Home/FooterHome';
import './App.css';

function App() {
  return (
    <section className="home-container">
      <HeaderHome />
      <Nav />
      <Menu />
      <FooterHome />
    </section>
  );
}

export default App;
