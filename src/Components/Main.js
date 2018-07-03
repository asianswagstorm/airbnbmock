import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Lightbox from 'react-images';
import '../css/Main.css';
import Listings from "./addons/Listings";

const imgLinks = ["https://a0.muscache.com/im/pictures/54335902/8572cc9d_original.jpg",
"https://a0.muscache.com/4ea/air/v2/pictures/52a1e88d-c589-4d88-a0b0-a106270d00f1.jpg",
"https://a0.muscache.com/im/pictures/23863364/b733008b_original.jpg",
"https://a0.muscache.com/im/pictures/48806892/20c44ce1_original.jpg",
"https://a0.muscache.com/im/pictures/13206216/24ebd66e_original.jpg",
"https://a0.muscache.com/im/pictures/812e040f-6f6f-4cae-ad67-66c050b57c1f.jpg",
"https://a0.muscache.com/im/pictures/53992414/64510035_original.jpg",
"https://a0.muscache.com/im/pictures/45680811/f4987a12_original.jpg" ];
  
const thumbnails = [{type:"ENTIRE CHALET SOUTH LAKE TAHOE",description:"The Lake Tahoe Chalet",price:"414", src: imgLinks[0], id: 0},
                    {type:"ENTIRE APARTMENT BARCELONA",description:"Sunny Apartment Near Metro Station.",price:"110", src:imgLinks[1],id: 1}, 
                    {type:"ENTIRE HOUSE TORONTO",description:"Luxurious Treehouse, Live Out Your Childhood Dreams",price:"56", src:imgLinks[2],id: 2}, 
                    {type:"PRIVATE ROOM LIMA PERU",description:"Very Cozy Room",price:"60", src:imgLinks[3],id: 3},
                    {type:"PRIVATE ROOM BARCELONA",description:"Private Room Fully Furnished",price:"115", src:imgLinks[4],id: 4},
                    {type:"ENTIRE HOUSE WIEN",description:"Nice House To Host A Party",price:"234", src:imgLinks[5],id: 5},
                    {type:"ENTIRE APARTMENT HONOLULU",description:"Amazing Volcanic View",price:"343", src:imgLinks[6],id: 6},
                    {type:"ENTIRE HOUSE PIONEERTOWN",description:"Enjoy Ultimate Privacy In This Beautiful Villa",price:"281", src:imgLinks[7],id: 7}
                    ];

class Main extends Component {
    constructor(props){
        super(props);
        this.state = { currentImage: 0 };
        this.closeLightbox = this.closeLightbox.bind(this); 
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this); 
        this.openLightbox = this.openLightbox.bind(this);
      }

    openLightbox = (key) =>{
       const id = parseInt(key.target.id);
       if(isNaN(id))
        console.log("Clicked On Background");
          if(!isNaN(id)){
        this.setState({
         currentImage: id,
         lightboxIsOpen: true,
        });}
      } 

      closeLightbox=()=> {
        this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
        }); 
      }
      gotoPrevious=()=> {
        this.setState({
          currentImage: this.state.currentImage - 1,                                                           
        });  
      }
      gotoNext=()=> {
        this.setState({
          currentImage: this.state.currentImage + 1,                                            
        }); 
      }


    render() {
      const Properties = thumbnails.map((object,index) => {
        return <Listings index= {index} src={object.src} type={object.type} price={object.price} description={object.description} title={object.title}  />
    });
      return (
        <section id="4col">
        <div className="container">
          <h2 className="mb-3">Homes around the world</h2>
          <div className="row" >
          <Lightbox images={thumbnails}
                          onClose={this.closeLightbox}
                          onClickPrev={this.gotoPrevious}
                          onClickNext={this.gotoNext}
                          currentImage={this.state.currentImage}
                          isOpen={this.state.lightboxIsOpen}
          />                
             <div className="row" onClick ={this.openLightbox}>
                {Properties}
             </div>
          </div>
        </div>
      </section>
      ); 
        }
    }
export default Main;

/* 
<div className="col-6 col-md-3">
              <figure>
                <img src={imgLinks[0]} id = {0} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(0)}/>
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
                <img src={imgLinks[1]} id = {1}className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(1)}/>
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
                <img src={imgLinks[2]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(2)}/>
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
                <img src={imgLinks[3]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(3)}/>
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
                <img src={imgLinks[4]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(4)}/>
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
                <img src={imgLinks[5]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(5)}/>
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
                <img src={imgLinks[6]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(6)}/>
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
                <img src={imgLinks[7]} className="w-100 mb-2" alt="" onClick ={() => this.openLightbox(7)}/>
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
*/