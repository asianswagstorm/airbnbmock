import React, { Component } from 'react';
import logo from '../logo.svg';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './Header';
import Explore from './Explore';
import Airbnbplus from './Airbnbplus';
import Main from './Main';
import Footer from './Footer';

class Home extends Component {

    render=()=>{
      return (
        <div className="Home">
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
  
  export default Home;