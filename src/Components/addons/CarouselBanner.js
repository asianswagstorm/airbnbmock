import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";

export default() =>(
<Carousel autoPlay>
<div className="tm-welcome-section">
      <img src="./images/banners/banner1.jpg" />
      <p className="legend">Legend 1</p>
    </div>

<div className="tm-welcome-section">
      <img src="./images/banners/banner2.jpg" />
      <p className="legend">Legend 2</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner3.jpg" />
      <p className="legend">Legend 3</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner4.jpg" />
      <p className="legend">Legend 4</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner5.jpg" />
      <p className="legend">Cooking Classes in Saigon</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner6.jpg" />
      <p className="legend">Cooking Classes in Mexico City</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner7.jpg" />
      <p className="legend">Experiences in San Fransisco</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner8.jpg" />
      <p className="legend">Homes in Sao Paolo</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner9.jpg" />
      <p className="legend">Experiences in Dublin</p>
    </div>
    <div className="tm-welcome-section">
      <img src="./images/banners/banner10.jpg" />
      <p className="legend">Homes in Shanghai</p>
    </div>
</Carousel>
);
   /*class CarouselBanner extends Component {
  constructor(props){
    super(props);
  }

render() {
  console.log("hello");
  
  return (
    
   <div className="tm-welcome-section">
      <img src= {this.props.src} />
      <p className="legend">{this.props.description}</p>
    </div> 
}
}
export default CarouselBanner;
*/