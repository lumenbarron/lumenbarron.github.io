import React from 'react';
import './home.css';

export class Menu extends React.Component {
  render() {
    return (
      <section className="menu-all">
      <h3 className="titles">PORTAFOLIO</h3>
      <section className="menu-container">
        
        <section className="menu-item">
          <button type="image" className="images-menus images-small" id="pokemon-image" />
          <button type="image" className="images-menus images-small" id="foodmap-image" />
        </section>

        <button type="image" className="images-menus images-large" id="il-piccolo-image" />
        <section className="">
        <button type="image" className="images-menus images-high" id="share-image" />
        </section>
      </section>
      </section>
    );
  }
}

{/* <input type="image" className="images-menus images-large" src={ilpiccolo} /> */}