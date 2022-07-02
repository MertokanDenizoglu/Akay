
import './App.css';
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Since from './pages/Since';
import Visio from './pages/Vision';








function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home/>
        </Route>
        <Route exact path='/about'>
          <About/>
        </Route>
        <Route exact path='/since'>
          <Since/>
        </Route>
        <Route exact path='/vision'>
          <Visio/>
        </Route>
       
      </Switch>
    </Router>
   
  );
}

export default App;
