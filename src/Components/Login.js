import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import '../css/Login.css';

class Login extends Component {
    render = () => {
        return (
            <div className="box">
            <h1>Login</h1>
            <div className="form">
              <label>Email</label>
              <input type="text" placeholder="Enter your Email"/>
              <label>Password</label>
              <input type="password" placeholder="Enter your password"/>
              <a href="#">Forgot password?</a>
              <button>Login</button>
            </div>
            </div>
         );
                 }
                    }

export default Login;