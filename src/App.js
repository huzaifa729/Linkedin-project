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

  <Router>
    <div>
       <Switch>
      <Route exact path="/">
        <Login/>
        <Header/>
        <Home/>
      </Route>

      <Route path="/home">
       <Home /> 
       <Header />
      </Route>

    </Switch>
    </div>
    </Router>
  
  );
}

export default App;
