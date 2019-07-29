import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {Home} from './Home/Home';
import {KnowMe} from './Home/KnowMe'
import './App.css';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      <Route exact path="/" component = {Home} />
      <Route path="/know-me" component = {KnowMe} />
    </Switch>
  </BrowserRouter>
  );
}

export default App;
