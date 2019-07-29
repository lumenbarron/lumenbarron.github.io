import React from 'react';
//import { BrowserRouter, HashRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Home/Home';


import './App.css';

function App() {
  return (
    <Home />
  );
}

export default App;

   // <HashRouter basename='/'>
    /* <BrowserRouter basename={process.env.PUBLIC_URL}> */
    // <Switch>
    //   <Route exact path="/" component = {Home} />
    //   <Route path="/know-me" component = {KnowMe} />
    //   <Route path="/contact" component = {Home} />
    // </Switch>
  /* </BrowserRouter> */
  /* </HashRouter> */