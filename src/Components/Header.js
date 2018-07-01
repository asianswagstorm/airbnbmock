import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselBanner from "./addons/CarouselBanner";

import '../css/Header.css';


class Header extends Component {
    constructor(props){
        super(props);
        this.state = {
          descriptionPlaceholder: "",
        };
      this.clickEvent =this.clickEvent.bind(this); 
      this.setDescription= this.setDescription.bind(this); 
    }

    setDescription=(description)=>{
      this.setState({descriptionPlaceholder : description})
    }

    clickEvent =() =>{
      console.log("Clicked Search");
    }

    render = () => {

      
      return (
<div className="Header">
        {/*Nav Bar*/}
    <div className="tm-welcome-section">

      <CarouselBanner SETdescription={(x)=>this.setDescription(x)}/>
    
      <div className="container tm-navbar-container">
        <div className="row">
          <div className="col-lg-12">
          <nav className="navbar navbar-expand-lg narbar-light">
                            <a className="navbar-brand mr-auto" href="#">
                                <img src="images/logo.png" alt="Site logo"/>
                                Airbnb
                            </a>
                            <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                                <ul className="navbar-nav ml-auto">
              <li className="nav-item">
               <img className="nav-item" src="images/logo.png" alt="Site logo"/>
               </li>
                <li className="nav-item">
                  <a href="https://www.airbnb.ca/login" className="nav-link tm-nav-link tm-text-white">Login</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.airbnb.ca/signup_login" className="nav-link tm-nav-link tm-text-white">Sign Up</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.airbnb.ca/help" className="nav-link tm-nav-link tm-text-white">Help</a>
                </li>
                <li className="nav-item">
                  <a href="https://www.airbnb.ca/host/homes?from_nav=1" className="nav-link tm-nav-link tm-text-white">Become a host</a>
                </li>
              </ul>
                        </div>                            
                    </nav>
          </div>
        </div>
        <div className="container text-center tm-welcome-container">
            <div className="tm-welcome">
          <h4 className="text mb-4 tm-site-name"> Book unique homes and experiences all over the world.</h4>
            </div> 
        </div>
        <div className="container">
            <div className="tm-search-form-container">
                <form action="index.html" method="GET" className="form-inline tm-search-form">
                    <div className="form-group tm-search-box">
                        <input type="text" name="keyword" className="form-control tm-search-input" placeholder= {this.state.descriptionPlaceholder} /> 
                        
                        <input type="button" value="Search" className="form-control tm-search-submit" onClick ={() => this.clickEvent()}/>
                    </div>
                </form>
            </div>
        </div>
      </div>
    </div>
</div>  ); 
          
        }
    }
export default Header;

/*   <nav className="navbar navbar-expand-lg narbar-light">
              
            </nav>*/