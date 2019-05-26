import React from 'react';
import {
  Route,
  BrowserRouter,
  Switch
} from "react-router-dom";
import './website.css';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <div className="website">
      <Switch>
        <Route path = '/' component = {Home}/>
      </Switch>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
