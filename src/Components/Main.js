import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Main.css';

class Main extends Component {
    constructor(){
        super();
    
      }

    ImageClicked = () =>{
        console.log("Clicked on property");
      } 
  
    render() {
      return (
        <section id="4col">
        <div className="container">
          <h2 className="mb-3">Homes around the world</h2>
          <div className="row">
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">ENTIRE CHALET · SOUTH LAKE TAHOE</span>
                  <span className="place-classname">The Lake Tahoe Chalet</span>
                  <span className="price">$414 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/4ea/air/v2/pictures/52a1e88d-c589-4d88-a0b0-a106270d00f1.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">Entire APARTMENT Barcelona</span>
                  <span className="place-classname">Sunny apartment near metro station.</span>
                  <span className="price">$110 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/23863364/b733008b_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">ENTIRE HOUSE · TORONTO</span>
                  <span className="place-classname">Treehouse live your childhood dreams</span>
                  <span className="price">$56 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/48806892/20c44ce1_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">PRIVATE ROOM · LIMA PERU</span>
                  <span className="place-classname">Very Cozy Room</span>
                  <span className="price">$60 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/13206216/24ebd66e_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">PRIVATE ROOM · BARCELONA</span>
                  <span className="place-classname">Nice House</span>
                  <span className="price">$281 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">ENTIRE HOUSE.WIEN</span>
                  <span className="place-classname">Nice House</span>
                  <span className="price">$281 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/53992414/64510035_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">ENTIRE APARTMENT.RIVA</span>
                  <span className="place-classname">Nice House</span>
                  <span className="price">$281 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            <div className="col-6 col-md-3">
              <figure>
                <img src="https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg" className="w-100 mb-2" alt="" onClick ={() => this.ImageClicked()}/>
                <figcaption>
                  <span className="color-text">ENTIRE HOUSE.PIONEERTOWN</span>
                  <span className="place-classname">Nice House</span>
                  <span className="price">$281 CAD per night. Free Cancelation</span>
                  <span className="rating">
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    <i className="fa fa-star checked"></i>
                    163.Superhost
                  </span>
                </figcaption>
              </figure>
            </div>
            
            
          </div>
        </div>
      </section>
      ); 
        }
    }
export default Main;