import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Explore.css';

class Explore extends Component {
    constructor(){
        super();
    
      }
  
    render() {
      return (
        <section id="4col">
        <div className="container">
          <h2 className="mb-3">Explore Airbnb</h2>
          <div className="row">
          <img src="images/explore.PNG" alt=""/>
          </div>
        </div>
        </section>  
      );
    }
}
export default Explore;