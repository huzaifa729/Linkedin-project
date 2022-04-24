//  import { Switch } from "react-router-dom";
// import { BrowserRouter as Router, Routes,  } from "react-router-dom";
import React, { useEffect } from 'react';
import './App.css';
import Header from "./components/Header";
import Home from "./components/Home";
import Login from './components/Login';

 import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { getUserAuth } from "./actions";
import { connect } from 'react-redux';



function App(props) {

  useEffect(()=>{
    props.getUserAuth();
  }, [])

  return (


  
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
    
   
  
  
  );
}


const mapStateToProps = (state) =>{
  return{};
}

const mapDispatchToProps = (dispatch) => ({
  getUserAuth: () => dispatch(getUserAuth()),
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
