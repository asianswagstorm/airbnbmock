import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './css/App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './Components/Header';
import Explore from './Components/Explore';
import Airbnbplus from './Components/Airbnbplus';
import Main from './Components/Main';
import Footer from './Components/Footer';
class App extends Component {

  render=()=>{
    return (
      <div className="App">
          <Header/>
          <Explore/>
          <Airbnbplus/>
            <Main/>
            <hr/>
          <Footer/>
      </div>
    );
  }
}

export default App;
