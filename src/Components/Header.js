import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import CarouselBanner from "./addons/CarouselBanner";
import Nav from "./Nav";
import '../css/Header.css';


class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionPlaceholder: "",
    };
    this.clickEvent = this.clickEvent.bind(this);
    this.setDescription = this.setDescription.bind(this);
  }

  setDescription = (description) => {
    this.setState({ descriptionPlaceholder: description })
  }

  clickEvent = () => {
    console.log("Clicked Search");
  }

  render = () => {


    return (
      <div className="Header">
        {/*Nav Bar*/}
        <div className="tm-welcome-section">

          <CarouselBanner SETdescription={(x) => this.setDescription(x)} />

          <div className="tm-navbar-container">
         
            <Nav/>
            <div className="container text-center tm-welcome-container">
              <div className="tm-welcome">
                <h4 className="text mb-4 tm-site-name"> Book unique homes and experiences all over the world.</h4>
              </div>
            </div>
            <div className="container">
              <div className="tm-search-form-container">
                <form action="index.html" method="GET" className="form-inline tm-search-form">
                  <div className="form-group tm-search-box">
                    <input type="text" name="search" className="form-control tm-search-input" placeholder={"Try: \"\ " + this.state.descriptionPlaceholder + "\"\ "} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>);

  }
}
export default Header;

/*   <nav className="navbar navbar-expand-lg narbar-light">
              
            </nav>*/