import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Airbnbplus.css';

let hrefLink = "https://www.airbnb.ca/s/select_homes?refinement_paths%5B%5D=%2Fselect_homes&allow_override%5B%5D=&s_tag=I2H15RRK";

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
            <div className="col-lg-12">
                <div className="inner">
                <a className="text tm-btn" target= "_blank" href={hrefLink}><img src="/images/airbnbplus.PNG"/></a>
                </div>
            </div>
          </div>
        </div>
        </section>  
      );
    }
}
export default Airbnbplus;