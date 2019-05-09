import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/SignUp.css';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            city: '',
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }; 
         this.handleChange = this.handleChange.bind(this);
         this.Verification = this.Verification.bind(this);
         this.handleSubmit = this.handleSubmit.bind(this);
  }
            
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
     });
  }

  Verification = (event) => {
    
   if(event.target.password.value != event.target.confirmPassword.value){
      console.log("Password Does not match!"); 
      alert("Password Does not match!"); }
  }


  handleSubmit(event) {
    event.preventDefault();
    console.log(this.state);
    this.Verification(event);
    
  }
 
    render = () => {
        return (
            <div className="box">
            <form method="POST" onSubmit={this.handleSubmit}>
            <div className="triangle">
            </div>
         
            <div className="form__body">
            <p className="title">
              Get Started Absolutely
              <span>Free</span>
            </p>
            <p className="description">Start hosting or find a place to stay</p>
            <div className="form">
            <input type="text" name="firstName" value={this.state.firstName.charAt(0).toUpperCase() + this.state.firstName.substr(1).toLowerCase()} onChange={this.handleChange} placeholder="First Name"  />
            <input type="text" name="lastName" value={this.state.lastName.charAt(0).toUpperCase() + this.state.lastName.substr(1).toLowerCase()} onChange={this.handleChange}  placeholder="Last Name"  />
            <input type="text" name="city" value={this.state.city.charAt(0).toUpperCase() + this.state.city.substr(1).toLowerCase()} onChange={this.handleChange}  placeholder="City"   />
            <input type="text" name="username" value={this.state.username} onChange={this.handleChange} placeholder="Username" />
            <input type="email" name="email" value={this.state.email} onChange={this.handleChange} placeholder='Email' />
            <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder="Password" />
            <input type="password" name="confirmPassword" value={this.state.confirmPassword} onChange={this.handleChange}  placeholder="Confirm Password" />
         
            <input className= "ResetForm" type="reset" name="reset" value="Reset"/>
            <button className= "SignupForm"  >Sign Up Free</button>
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