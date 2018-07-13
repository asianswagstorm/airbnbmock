import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Modal from "react-responsive-modal";
import Login from "./Login";
import '../css/Nav.css';

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center"
  };

class Nav extends Component {
     state = {
    open: false
  };

  onOpenModal = () => {
    this.setState({ open: true });
  };

  onCloseModal = () => {
    this.setState({ open: false });
  };

    render = () => {
        const { open } = this.state;
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
                                <li onClick={this.onOpenModal} className="nav-link tm-nav-link tm-text-white">Login</li>
                                </li>
        
                                <li className="nav-item">
                                    <li className="nav-link tm-nav-link tm-text-white">Sign Up</li>
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

         <Modal open={open} onClose={this.onCloseModal} center>
        <Login/>
        </Modal>
        </div>

        );
    }
}
export default Nav;