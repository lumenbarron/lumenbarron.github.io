import React from 'react';
import lucyName from './lucyName.png'
import bannerHome from './bannerHome.png'
import './home.css';

export class Home extends React.Component{
  render (){
    return (
      <div className="App">
        <header className="lucy-header">
          <img src={lucyName} className="lucy-name" alt="home"/>
          <img src={bannerHome} alt="home" />
          
        </header>
      </div>
    );
  }
}

