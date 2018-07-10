import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Nav extends Component {
    render = () => {
        return (
            <div className="row">
                <div className="col-lg-12">
                    <nav className="navbar navbar-expand-lg narbar-light">
                        <a className="navbar-brand mr-auto" href="#">
                            <img src="images/logo.png" alt="Site logo" />
                            airbnb
                        </a>
                        <button type="button" id="nav-toggle" className="navbar-toggler collapsed" data-toggle="collapse" data-target="#mainNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div id="mainNav" className="collapse navbar-collapse tm-bg-white">
                            <ul className="navbar-nav ml-auto">

                                <li className="nav-item">
                                    <a href="https://www.airbnb.ca/login" className="nav-link tm-nav-link tm-text-white">Login</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.airbnb.ca/signup_login" className="nav-link tm-nav-link tm-text-white">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.airbnb.ca/help" className="nav-link tm-nav-link tm-text-white">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.airbnb.ca/host/homes?from_nav=1" className="nav-link tm-nav-link tm-text-white">Become a host</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        );
    }
}
export default Nav;