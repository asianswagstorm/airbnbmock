import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/SignUp.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: "",
            lastName: "",
            city: "",
            email: "",
            password: ""
        }; 
    }
    render = () => {
        return (
            <div className="box">
            <form method="POST">
            <div className="triangle">
            </div>
         
            <div className="form__body">
            <p className="title">
              Get Started Absolutely
              <span>Free</span>
            </p>
            <p className="description">Start hosting or find a place to stay</p>
            <div className="form">
            <input type="text" placeholder="First Name" />
            <input type="text" placeholder="Last Name" />
            <input type="text" placeholder="City" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className= "SignupForm">Sign Up Free</button>
            </div>
            <p className="disclaimer">
              By clicking "Sign Up Free" I agree to 
              <span>Terms of Service</span>
            </p>
          </div>
        </form>
            </div>
        );
    }
}
export default SignUp;