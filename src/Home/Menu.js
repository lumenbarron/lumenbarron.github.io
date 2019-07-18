import React from 'react';
import './home.css';
import ImagesButton from './ImagesButton'

export class Menu extends React.Component {
  render() {
    return (
      <section id="portafolio" className="menu-all">
        <h3 className="titles">PORTAFOLIO</h3>
        <section className="menu-container">
          <section className="menu-item">
            <ImagesButton
              sizeImage="images-menus images-small"
              sizeText="images-menus-text images-small"
              idBtn="pokemon-image"
              title="Pokemon Be.Girl.Ners"
              description="Web app para principiantes en el mundo Pokemon en donde
            podrás conocer información a partir del tipo."
              referencia="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
            />

            <ImagesButton
              sizeImage="images-menus images-small"
              sizeText="images-menus-text images-small"
              idBtn="foodmap-image"
              title="Foodmap"
              description="Web app responsive que busca y filtra los mejores
            restaurantes de Guadalajara cercanos de tu ubicación."
              referencia="https://lumenbarron.github.io/gdl-open-house/"
            />
          </section>

          <ImagesButton
            sizeImage="images-menus images-large"
            sizeText="images-menus-text images-large"
            idBtn="il-piccolo-image"
            title="Il Piccolo"
            description="Web app para tablet en donde los meseros pueden anotar sus
            pedidos y enviarlos en tiempo real a una base de datos."
            referencia="https://lumenbarron.github.io/GDL002-burger-queen/"
          />

            <ImagesButton
              sizeImage="images-menus images-high"
              sizeText="images-menus-text images-high"
              idBtn="share-image"
              title="Share a Smile"
              description="Red social web app versión móvil enfocada en conectar
            madres que quieran vender, comprar o donar artículos infantiles."
              referencia="https://karlyvall.github.io/GDL002-social-network/public/#access-screen"
            />
        </section>
      </section>
    );
  }
}
