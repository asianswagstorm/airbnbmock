import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import ReactModalLogin from 'react-modal-login';
import Login from "./Login";

class Nav extends Component {
   
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

                                <li className="nav-item" >
                                    <a href="#" className="nav-link tm-nav-link tm-text-white" data-target="#loginModal" data-toggle="modal">Login</a>
                                </li>
                        
                                <li className="nav-item">
                                    <a href="#" className="nav-link tm-nav-link tm-text-white">Sign Up</a>
                                </li>
                                <li className="nav-item">
                                    <a href="Help" className="nav-link tm-nav-link tm-text-white">Help</a>
                                </li>
                                <li className="nav-item">
                                    <a href="https://www.airbnb.ca/host/homes?from_nav=1" className="nav-link tm-nav-link tm-text-white">Become a host</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                  </div>
                  </div>  

     <div id="loginModal" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal"> &times;</button>
                    <h4>Login</h4>
                </div>
                <div class="modal-body">
                <form class="form-inline">
                   <div class="form-group">
                       <label class="sr-only" for="email">Email</label>
                       <input type="text" class="form-control input-sm" placeholder="Email" id="email" name="email"/>
                       </div>
                        <div class="form-group">  
                          
                           <label class="sr-only" for="password">Password</label>
                             <input type="password" class="form-control input-sm" placeholder="Password" id="password" name="password"/></div>
                       <div class="checkbox">
                       <label>
                       <input type="checkbox"/> Remember me
                       </label>
                         </div>
                    
                       <button type="submit" class="btn btn-info btn-xs">Sign in</button>
                       <button type="button" class="btn btn-default btn-xs" data-dismiss="modal">Cancel</button> 
                
                    </form>
                </div>
            </div>
        </div>
        </div>
        </div>
        );
    }
}
export default Nav;