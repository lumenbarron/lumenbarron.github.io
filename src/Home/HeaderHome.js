import React from 'react';
import './styles/header.css';

export class HeaderHome extends React.Component {
  render() {
    return (
      <section id="home" className="lucy-header-container">
        <section className="lucy-header-text">
          <p className="text-bold">FRONT END DEVELOPER & INDUSTRIAL DESIGNER</p>
          <p>
            "I design and develop experiences and products that make people's
            lifes better”
          </p>
        </section>
        <section className="lucy-header">
          <section id="lucyBanner" />
        </section>
      </section>
    );
  }
}

