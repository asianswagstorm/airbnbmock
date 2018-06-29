import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Footer.css';

class Footer extends Component {
  constructor(){
    super();

  }
  
  render = () => {
      return (
       
<div className="container">
       
     <div class="row tm-mb-medium">
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
            <h4 class="mb-4 tm-font-300">Airbnb</h4>
              <ul className="list">
              <a target="_blank" href="https://www.airbnb.ca/careers"><li>Careers</li></a>
              <a target="_blank" href="https://press.atairbnb.com/"><li>Press</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help/topic/250/terms---policies"><li>Policies</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help?from=footer"><li>Help</li></a>
              <a target="_blank" href="https://www.airbnb.ca/diversity"><li>Diversity & Belonging</li></a> 
              </ul>
          </div>
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
           <h4 class="mb-4 tm-font-300">Discover</h4>
              <ul className="list">
                <a target="_blank" href="https://www.airbnb.ca/trust"><li>Trust & Safety</li></a>
                <a target="_blank" href="https://www.airbnb.ca/invite?r=6"><li>Travel Credit</li></a>
                <a target="_blank" href="https://www.airbnbcitizen.com/?utm_source=airbnb&utm_medium=footer&utm_campaign=product"><li>Airbnb Citizen</li></a>
                <a target="_blank" href="https://www.airbnb.ca/work?s=footer"><li> Business Travel</li></a>
                <a target="_blank" href="https://www.airbnb.ca/things-to-do"><li>Guidebooks</li></a>
                <a target="_blank" href="https://airbnbmag.com/"><li>Airbnbmag</li></a>
                <a target="_blank" href="https://www.airbnb.ca/events"><li className="new">Events</li></a>
              </ul>
          </div>
            
          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
            <h4 class="mb-4 tm-font-300">Hosting</h4>
            <ul className="list">
            <a target="_blank" href="https://www.airbnb.ca/host/homes?from_footer=1"> <li>Why Host</li></a>
            <a target="_blank" href="https://www.airbnb.ca/hospitality"><li>Hospitality</li></a>
            <a target="_blank" href="https://www.airbnb.ca/help/article/1389/responsible-hosting-in-canada"><li>Responsible Hosting</li></a>
            <a target="_blank" href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center"><li>Community Centre</li></a>
            </ul>
          </div>

          <div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 mb-4">
               <ul class="social-icon">
                         <a href="https://www.facebook.com/airbnb" className="fa fa-facebook"></a>
                         <a href="https://twitter.com/airbnb" class="fa fa-twitter"></a>
                         <a href="https://www.instagram.com/airbnb/" class="fa fa-instagram"></a>      
                </ul>

             <ul className="list">
             <a target="_blank" href="https://www.airbnb.ca/terms"> <li>Terms</li></a>
             <a target="_blank" href="https://www.airbnb.ca/terms/privacy_policy"> <li>Privacy</li></a>
             <a target="_blank" href="https://www.airbnb.ca/sitemaps"> <li>Site Map</li></a>
             </ul>
          </div>
      </div>
        
      
        <div className="row">
          <p>&copy; Airbnb, Inc.</p>
              
              
                <select className="col-sm-4">
                  <option>English</option>
                  <option>Chinese Simplified</option>
                  <option>Vietnamese</option>
                  <option>Francais</option>
                  <option>Italian</option>
                  <option>Chinese Traditional</option>
                </select>

                <select className="col-sm-4">
                  <option>USD</option>
                  <option>VND</option>
                  <option>AUD</option>
                  <option>BGN</option>
                  <option>BRL</option>
                  <option>CAD</option>
                  <option>CHF</option>
                  <option>CLP</option>
                  <option>AUD</option>
                </select>
            
        </div>
      
 </div>
   
    ); 
        }
    }
export default Footer;