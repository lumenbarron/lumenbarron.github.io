import React from 'react';
import pokemon from './pokemon.png';
import foodmap from './foodmap.png';
import ilpiccolo from './il-piccolo.png';
import sharesmile from './share-smile.png';
import './home.css';

export class Menu extends React.Component{
  render (){
    return (
      <div className="">
        <input type="image" className="imagesMenus" src={pokemon} />
        <input type="image" className="imagesMenus" src={foodmap} />
        <input type="image" className="imagesMenus" src={ilpiccolo} />
        <input type="image" className="imagesMenus" src={sharesmile} />
      </div>
    );
  }
}