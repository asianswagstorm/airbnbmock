import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './css/App.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Header from './Components/Header';
import Explore from './Components/Explore';
import Airbnbplus from './Components/Airbnbplus';
import Main from './Components/Main';
import Footer from './Components/Footer';
class App extends Component {
  constructor(){
    super();

  }

  render=()=>{
    return (
      <div className="App">

    <div className="row">
        <div className="col-xl-12"> 
          <div className="App-Header">
          <Header/>
          </div>
        </div>  
    </div>  

    <div className="row">
        <div className="col-xl-12"> 
          <div className="App-Explore">
          <Explore/>
          </div>
        </div>  
    </div>    

    <div className="row">
        <div className="col-xl-12"> 
          <div className="App-Airbnbplus">
          <Airbnbplus/>
          </div>
        </div>  
    </div>  
        
    <div className="row">
      <div className="col-xl-12"> 
         <div className="App-Body">
            <Main/>
         </div>
      </div>
    </div>

   <div className="row">
      <div className="col-xl-12"> 
        <hr></hr>
        <div className = "App-Footer">
          <Footer/>
        </div>
      </div>  
   </div>
      </div>
    );
  }
}

export default App;
