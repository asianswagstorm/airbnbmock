import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Carousel from "./addons/Carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './Header.css';
class Header extends Component {
    constructor(){
        super();
    
      }
    
    render = () => {
      return (

      <div id="header">
<Carousel/>
        
        <div id="nav">
            <img id="logo" src="/images/logo.png" id="logo" />
              
            <a href="https://www.airbnb.ca/login" class="nav_links">Log In</a>
            <a href="https://www.airbnb.ca/signup_login" class="nav_links">Sign Up</a>
            <a href="https://www.airbnb.ca/help" class="nav_links">Help</a>
            <a href="https://www.airbnb.ca/host/homes?from_nav=1" class="nav_links">Become a host</a>
        </div>
        
        <div id="welcome_text_div">
            <p id="welcome_text">Book unique homes and experiences all over the world.</p>
        </div>     
        <div id="searchbar_div">
            <div id="searchbar">
                <div id="where_div">
                    <p id="where_text">
                        Where do you want to go?
                    </p>
                </div>
                <div  id="check_in_div">
                    <p id="check_in_text">
                        Check In
                    </p>
                </div>
                <div id="check_out_div">
                    <p id="check_out_text">
                        Check Out
                    </p>
                </div>
                <div id="guest_div">
                    <p id="guest_text">
                        1 Guest
                    </p>
                </div>
                <div id="search_button_div">
                    <a href="#" id="search_button">
                        Search
                    </a>
                </div>
            </div>
        </div>
       
    </div>
         

        
      ); 
        }
    }
export default Header;