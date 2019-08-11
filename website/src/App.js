import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import './website.css';
import Home from './components/Home';
import Experiences from './components/Experiences';
import About from './components/About';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="website">
      <Switch>
        <Route exact path = '/' component = {Home}/>
        <Route path = '/experiences' component = {Experiences}/>
        <Route path = '/about' component = {About}/>

      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
