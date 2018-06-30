import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselBanner from "./addons/CarouselBanner";

import '../css/Header.css';

const banner = [
    {id:0 ,src:"images/banners/banner1.jpg", description:"Some Place",},
    {id:1 ,src:"images/banners/banner2.jpg", description: "Some Place"},
    {id:2 ,src:"images/banners/banner3.jpg", description:"Some Place"},
    {id:3 ,src:"images/banners/banner4.jpg", description:"Some Place"},
    {id:4 ,src:"images/banners/banner5.jpg", description:"Some Place"},
    {id:5 ,src:"images/banners/banner6.jpg", description:"Some Place"},
    {id:6 ,src:"images/banners/banner7.jpg", description:"Some Place"},
    {id:7 ,src:"images/banners/banner8.jpg", description:"Some Place"},
    {id:8 ,src:"images/banners/banner9.jpg", description:"Some Place"},
    {id:9 ,src:"images/banners/banner10.jpg",description:"Some Place"}
];
let description = "legend";
class Header extends Component {
    constructor(props){
        super(props);
      this.clickEvent =this.clickEvent.bind(this);  
    }
    clickEvent =() =>{
      console.log("Clicked Search");
    }
    
    render = () => {
      

      console.log(banner.map((bannerImage,i)=>{
        return <CarouselBanner imgSrc={bannerImage.src} description = {bannerImage.description} key={banner.id}/>
}));
      return (
<div className="Header">
        {/*Nav Bar*/}
    <div className="tm-welcome-section">

      <CarouselBanner/>
    
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
                        <input type="text" name="keyword" className="form-control tm-search-input" placeholder= {description} /> 
                        
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