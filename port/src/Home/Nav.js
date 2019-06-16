import React from 'react';
import lucyName from './lucyName.png'
import './home.css';

export class Nav extends React.Component{
  render (){
    return (
      <div className="App">
        <header className="lucy-header">
          <img src={lucyName} className="lucy-name" alt="home"/>
          <img src={bannerHome} alt="home" />
          
        </header>
      </div>
      <header>
      <section>
      <h1>Lucero Mendez</h1>
      <!--etiqueta vacía -->
      <hr>
      </section>
      <nav>
              <a href="disenoIndustrial.html" target="_blank"> Diseño Industrial </a>
              <a href="disenoGrafico.html" target="_blank"> Diseño Gráfico </a>
              <a href="disenoDigital.html" target="_blank"> Diseño Digital </a>
              <a href="fotografia.html" target="_blank"> Fotografía </a>
              <a href="contacto.html" target="_blank"> Contacto </a>
      </nav>
  </header>
    );
  }
}