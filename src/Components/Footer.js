import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  constructor(){
    super();

  }
  
  
  render = () => {
      return (
        <div id="footer">
        <div className="container">
        <footer className="top-footer">
          <div className="row">
            <div className="col-3 offset-1">
              <div className="dropdowns">
                <select className="lang-select">
                  <option>English</option>
                  <option>Chinese Simplified</option>
                  <option>Vietnamese</option>
                  <option>Francais</option>
                  <option>Italian</option>
                  <option>Chinese Traditional</option>
                </select>
                <select className="cur-select">
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
            <div className="col-2 offset-1">
              <h4>Company</h4>
              <ul className="list">
              <a target="_blank" href="https://www.airbnb.ca/careers"><li>Careers</li></a>
              <a target="_blank" href="https://press.atairbnb.com/"><li>Press</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help/topic/250/terms---policies"><li>Policies</li></a>
              <a target="_blank" href="https://www.airbnb.ca/help?from=footer"><li>Help</li></a>
              <a target="_blank" href="https://www.airbnb.ca/diversity"><li>Diversity & Belonging</li></a> 
              </ul>
            </div>
            <div class="col-2">
              <h4>Discover</h4>
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
            
            <div className="col-2">
            <h4>Hosting</h4>
            <ul className="list">
            <a target="_blank" href="https://www.airbnb.ca/host/homes?from_footer=1"> <li>Why Host</li></a>
            <a target="_blank" href="https://www.airbnb.ca/hospitality"><li>Hospitality</li></a>
            <a target="_blank" href="https://www.airbnb.ca/help/article/1389/responsible-hosting-in-canada"><li>Responsible Hosting</li></a>
            <a target="_blank" href="https://community.withairbnb.com/t5/Community-Center/ct-p/community-center"><li>Community Centre</li></a>
            </ul>
            </div>

            <div className="col-2">
            <ul className="social">
            <a className="facebook" href="https://www.facebook.com/airbnb"></a>
            <a className="twitter" href="https://twitter.com/airbnb"></a>
            <a className="instagram" href="https://www.instagram.com/airbnb/"></a>
            </ul>
     
                <ul className="list">
                <a target="_blank" href="https://www.airbnb.ca/terms"> <li>Terms</li></a>
                <a target="_blank" href="https://www.airbnb.ca/terms/privacy_policy"> <li>Privacy</li></a>
                <a target="_blank" href="https://www.airbnb.ca/sitemaps"> <li>Site Map</li></a>
            </ul>


          </div>
          </div>
        </footer>
        <footer className="bottom-footer">
          <p>&copy; Airbnb, Inc.</p>
        </footer>
      </div>
    </div>); 
        }
    }
export default Footer;