import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Explore.css';

class Explore extends Component {
    constructor(){
        super();
    
      }
  //<img src="images/explore.PNG" alt=""/>
    render() {
      return (

        <section id="4col" className="parallax-section">
        <div className="container">
        <h2 className="mb-3">Explore Airbnb</h2>
             <div className="row">
                  <div className="col-md-4 col-sm-4">
                       <div className="project-item">
                                 <img src="images/explore1.png" className="img-responsive" alt=""/>
                                 <div className="project-overlay">
                                      <div className="project-info">
                                           <h1>Homes</h1>
                                      </div>
                                 </div> 
                       </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                       <div className="project-item">
                                 <img src="images/explore2.png" className="img-responsive" alt=""/>
                                 <div className="project-overlay">
                                      <div className="project-info">
                                           <h1>Experiences</h1>
                                      </div>
                                 </div> 
                       </div>
                  </div>

                  <div className="col-md-4 col-sm-4">
                       <div className="project-item">
                                 <img src="images/explore3.png" className="img-responsive" alt=""/>
                                 <div className="project-overlay">
                                      <div className="project-info">
                                           <h1>Restaurants</h1>
                                      </div>
                                 </div> 
                       </div>
                  </div>
              </div>
            </div>      
                  </section>
      );
    }
}
export default Explore;