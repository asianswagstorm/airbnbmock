import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-responsive-modal";
import Login from "./Login";
import SignUp from './Signup';
import '../css/Nav.css';


const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

class Nav extends Component {
     state = {
    LoginOpen: false,
    SignUpOpen:false
  };

  onOpenLoginModal = () => {
    this.setState({ LoginOpen: true });
  };

  onOpenSignUpModal = () => {
    this.setState({ SignUpOpen: true });
  };

  onCloseLoginModal = () => {
    this.setState({ LoginOpen: false });
  };

  onCloseSignUpModal = () => {
    this.setState({ SignUpOpen: false });
  };

    render = () => {
        const { LoginOpen , SignUpOpen } = this.state;
      
        return (
            <div style={styles}> 
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg narbar-light">
                        <a className="navbar-brand mr-auto" href="/">
                            <img src="images/logo.png" alt="Site logo" />
                            airbnb
                        </a>
                        <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                <li onClick={this.onOpenLoginModal} className="nav-link tm-nav-link tm-text-white">Login</li>
                                </li>
        
                                <li className="nav-item">
                                    <li onClick={this.onOpenSignUpModal} className="nav-link tm-nav-link tm-text-white">Sign Up</li>
                                </li>
                                <li className="nav-item">
                                    <li className="nav-link tm-nav-link tm-text-white">Help</li>
                                </li>
                                <li className="nav-item">
                                    <li  className="nav-link tm-nav-link tm-text-white">Become a host</li>
                                </li>
                            </ul>
                        </div>
                    </nav>
                  </div>
                  </div>  

         <Modal open={LoginOpen} onClose={this.onCloseLoginModal} center>
        <Login/>
        </Modal>
        <Modal open={SignUpOpen} onClose={this.onCloseSignUpModal} center>
         <SignUp/>
        </Modal>
        </div>

        );
    }
}
export default Nav;