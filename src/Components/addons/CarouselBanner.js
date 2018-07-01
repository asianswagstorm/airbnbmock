import React, {Component} from "react";
import { Carousel } from "react-responsive-carousel";

const banner = [
  {id:0 ,src:"images/banners/banner1.jpg", description:"Relaxing Los Angelos Homes"},
  {id:1 ,src:"images/banners/banner2.jpg", description: "New York City Coffee Shops"},
  {id:2 ,src:"images/banners/banner3.jpg", description:"Bike Rides in the Colorado Mountains"},
  {id:3 ,src:"images/banners/banner4.jpg", description:"Enjoy the Country Side of Northern Ontario"},
  {id:4 ,src:"images/banners/banner5.jpg", description:"Cooking Classes in Saigon"},
  {id:5 ,src:"images/banners/banner6.jpg", description:"Cooking Classes in Mexico City"},
  {id:6 ,src:"images/banners/banner7.jpg", description:"Experiences in San Fransisco"},
  {id:7 ,src:"images/banners/banner8.jpg", description:"Homes in Sao Paolo"},
  {id:8 ,src:"images/banners/banner9.jpg", description:"Experiences in Dublin"},
  {id:9 ,src:"images/banners/banner10.jpg",description:"Homes in Shanghai"}
];

class CarouselBanner extends Component {
  constructor(props){
    super(props);
    this.state = {
    bannerList: []
    };
  }

  componentWillMount = () => {
  this.setState({
    bannerList : CarouselBanner.renderList(banner)
  })
  }

  onCarouselChange=(index)=>{
   this.props.SETdescription(banner[index].description);
  }

  static renderList = (list) => {
    return list.map((something , i) => {
      return (<div key={i} className="tm-welcome-section">
      <img src={something.src.toString()} />
      <p className="legend">{something.description.toString()}</p>
    </div>)} ); 
  } 
render() {

  return (
    <Carousel onChange={(index)=>this.onCarouselChange(index)} showArrows={false} showThumbs={false}  interval = {3000} autoPlay={true}>
    {this.state.bannerList}
   </Carousel>
   );
}
}
export default CarouselBanner;

/*
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
);*/
 