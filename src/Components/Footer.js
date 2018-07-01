import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Footer.css';

class Footer extends Component {
  constructor(props){
    super(props
    );

  }
  componentDidMount = () => {
    window.googleTranslateElementInit = this.googleTranslateElementInit
  }

  googleTranslateElementInit = (language) => {
    new window.google.translate.TranslateElement({pageLanguage: language, layout: window.google.translate.TranslateElement.FloatPosition.TOP_LEFT}, 'google_translate_element');
    }

  render = () => {
      return (
       
<div className="container">
       
     <div className="row tm-mb-medium">
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-3">
            <h4 className="mb-4 tm-font-300">Airbnb</h4>
              <ul className="list">
              <a target="_blank" href="https://www.airbnb.ca/careers"><li>Careers</li></a>
              <a target="_blank" href="https://press.atairbnb.com/"><li>Press</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help/topic/250/terms---policies"><li>Policies</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help?from=footer"><li>Help</li></a>
              <a target="_blank" href="https://www.airbnb.ca/diversity"><li>Diversity & Belonging</li></a> 
              </ul>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-3">
           <h4 className="mb-4 tm-font-300">Discover</h4>
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
            
          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-3">
            <h4 className="mb-4 tm-font-300">Hosting</h4>
            <ul className="list">
            <a target="_blank" href="https://www.airbnb.ca/host/homes?from_footer=1"> <li>Why Host</li></a>
            <a target="_blank" href="https://www.airbnb.ca/hospitality"><li>Hospitality</li></a>
            <a target="_blank" href="https://www.airbnb.ca/help/article/1389/responsible-hosting-in-canada"><li>Responsible Hosting</li></a>
            <a target="_blank" href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center"><li>Community Centre</li></a>
            </ul>
          </div>

          <div className="col-xl-3 col-lg-3 col-md-3 col-sm-6 mb-3">
            <div className="mediaIcons"> 
               <ul className="social-icon">
                         <li><a target="_blank" href="https://facebook.com/airbnb" className="fa fa-facebook"></a></li>
                         <li><a target="_blank" href="https://twitter.com/airbnb" className="fa fa-twitter"></a></li>
                         <li><a  target="_blank"href="https://www.instagram.com/airbnb/" className="fa fa-instagram"></a></li>      
                </ul> 
            </div>     

             <ul className="list">
             <a target="_blank" href="https://www.airbnb.ca/terms"> <li>Terms</li></a>
             <a target="_blank" href="https://www.airbnb.ca/terms/privacy_policy"> <li>Privacy</li></a>
             <a target="_blank" href="https://www.airbnb.ca/sitemaps"> <li>Site Map</li></a>
             </ul>
          </div>
      </div>
        
      <hr></hr>
        <div className="row">
          <p>&copy; Airbnb, Inc.</p>
              
                <button className="col-sm-4" id="google_translate_element" ></button>
               
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