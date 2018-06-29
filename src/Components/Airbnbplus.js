import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Airbnbplus.css';

class Airbnbplus extends Component {
    constructor(){
        super();
    
      }
  
    render() {
      return (
        <section id="4col">
        <div className="container">
          <h2 className="mb-3">Introducing Airbnb Plus</h2>
          <div className="row">
          <section id="banner">
                <div className="inner">
                <img src="images/airbnbplus.PNG" alt=""/>
                </div>
              </section>
          </div>
        </div>
        </section>  
      );
    }
}
export default Airbnbplus;