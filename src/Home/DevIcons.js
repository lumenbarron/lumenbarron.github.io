import React from 'react';
import './styles/know-me.css';

const DevIcons = props => (
    <section className="icon-with-name">
    <i className={props.icon}/>
    <p className="icons-text">{props.iconText}</p>
  </section>
  );

export default DevIcons