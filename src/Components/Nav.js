import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Modal, Button } from 'antd';
import Login from "./Login";
import '../css/Nav.css';

class Nav extends Component {
    state = {
        LoginModalVisible: false,
      }

      setLoginModalVisible(LoginModalVisible) {
          console.log("Pressed Login");
        this.setState({ LoginModalVisible });
      }

    render = () => {
        return (
            <div>
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
                                <li onClick={() => this.setLoginModalVisible(true)} className="nav-link tm-nav-link tm-text-white">Login</li>
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

        <Modal
        style={{ top: 0 }}
        wrapClassName="vertical-center-modal"
        visible={this.state.LoginModalVisible}
        onOk={() => this.setLoginModalVisible(false)}
        onCancel={() => this.setLoginModalVisible(false)}
        >
        <Login/>
        </Modal>
        </div>

        );
    }
}
export default Nav;