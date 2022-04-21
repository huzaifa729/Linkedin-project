//  import { Switch } from "react-router-dom";
// import { BrowserRouter as Router, Routes,  } from "react-router-dom";
import React from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (

 
    <div>
       <Router>
       <Switch>
      <Route exact path="/">
        <Login/>
      </Route>

      <Route path="/home">
      <Header />
       <Home /> 
      </Route>

    </Switch>
    </Router>
    </div>
  
  
  );
}

export default App;
