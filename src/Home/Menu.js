import React from 'react';
import './home.css';

export class Menu extends React.Component {
  render() {
    return (
      <section id="portafolio" className="menu-all">
        <h3 className="titles">PORTAFOLIO</h3>
        <section className="menu-container">
          <section className="menu-item">
            <button
              type="image"
              className="images-menus images-small"
              id="pokemon-image"
            >
              <section className="images-menus-text images-small">
                <h3>Pokemon Be.Girl.Ners</h3>
                <br />
                <h4>
                  Web app para principiantes en el mundo Pokemon en donde
                  podrás conocer información a partir del tipo.
                </h4>
                <br />
                <a
                  href="https://lumenbarron.github.io/GDL002-data-lovers/src/index.html"
                  target="_blank"
                  className="images-menu-links"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </section>
            </button>

            <button
              type="image"
              className="images-menus images-small"
              id="foodmap-image"
            >
              <section className="images-menus-text images-small">
                <h3>Foodmap</h3>
                <br />
                <h4>
                  Web app responsive que busca y filtra los mejores
                  restaurantes de Guadalajara cercanos de tu ubicación.
                </h4>
                <br />
                <a
                  href="https://lumenbarron.github.io/gdl-open-house/"
                  target="_blank"
                  className="images-menu-links"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </section>
            </button>
          </section>

          <button
            type="image"
            className="images-menus images-large"
            id="il-piccolo-image"
          >
            <section className="images-menus-text images-large">
              <h3>Il Piccolo</h3>
              <br />
              <h4>
                Web app para tablet en donde los meseros pueden anotar sus
                pedidos y enviarlos en tiempo real a una base de datos
              </h4>
              <br />
              <a
                href="https://lumenbarron.github.io/GDL002-burger-queen/"
                target="_blank"
                className="images-menu-links"
                rel="noopener noreferrer"
              >
                Ir al sitio
              </a>
            </section>
          </button>

          <section className="">
            <button
              type="image"
              className="images-menus images-high"
              id="share-image">
              <section className="images-menus-text images-high">
                <h3>Share a Smile</h3>
                <br />
                <h4>
                  Red social web app versión móvil enfocada en conectar
                  madres que quieran vender, comprar o donar artículos infantiles.
                </h4>
                <br />
                <a
                  href="https://karlyvall.github.io/GDL002-social-network/public/#access-screen"
                  target="_blank"
                  className="images-menu-links"
                  rel="noopener noreferrer"
                >
                  Ir al sitio
                </a>
              </section>
            </button>
          </section>
        </section>
      </section>
    );
  }
}
