import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Listings extends Component{
    constructor(props){
        super(props);
      }

    render =() => {
        return(
            <div className="col-6 col-md-3">
                   <figure>
                     <img src={this.props.src} id={this.props.index} className="w-100 mb-2" alt="" />
                        <figcaption>
                            <span className="color-text">{this.props.title}</span>
                            <span className="place-classname">{this.props.description}</span>
                            <span className="price">{"$" + this.props.price +" CAD per night. Free Cancelation"}</span>
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
                );}
}
export default Listings;
//