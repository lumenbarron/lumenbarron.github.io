import React from 'react';
import pokemon from './Images/pokemon.png';
import foodmap from './Images/foodmap.png';
import ilpiccolo from './Images/il-piccolo.png';
import sharesmile from './Images/share-smile.png';
import './home.css';

export class Menu extends React.Component {
  render() {
    return (
      <section>
      <h3 className="titles">PORTAFOLIO</h3>
      <section className="menu-container">
        
        <section className="menu-item">
          <input type="image" className="images-menus" src={pokemon} />
          <input type="image" className="images-menus" src={foodmap} />
        </section>
        <input type="image" className="images-menus" src={ilpiccolo} />
        <section className="menu-item">
        <input type="image" className="images-menus" src={sharesmile} />
        </section>
      </section>
      </section>
    );
  }
}