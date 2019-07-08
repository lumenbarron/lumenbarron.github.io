import React from 'react';
import './home.css';

export class Menu extends React.Component {
  render() {
    return (
      <section id="portafolio" className="menu-all">
      <h3 className="titles">PORTAFOLIO</h3>
      <section className="menu-container">
        <section className="menu-item">
          
          <button type="image" className="images-menus images-small" id="pokemon-image">
          <h3 className="images-menus-text" >Pokemon Be.Girl.Ners</h3>
          </button>
          
          
          
          
          <button type="image" className="images-menus images-small" id="foodmap-image" >
          <h3 className="images-menus-text" >Foodmap</h3>
          </button>
        </section>

        <button type="image" className="images-menus images-large" id="il-piccolo-image" >
        <h3 className="images-menus-text" >Il Piccolo</h3>
          </button>

        <section className="">
        <button type="image" className="images-menus images-high" id="share-image" >
        <h3 className="images-menus-text" >Share a Smile</h3>
          </button>
        </section>
      </section>
      </section>
    );
  }
}

{/* <input type="image" className="images-menus images-large" src={ilpiccolo} /> */}