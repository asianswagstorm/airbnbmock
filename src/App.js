import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Home from "./Components/Home";
import Login from "./Components/Login";
class App extends Component {

  render=()=>{
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Login" exact component ={Login} />
      </Switch>
    </BrowserRouter>
    );
  }
}

export default App;

/*       
           */