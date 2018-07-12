import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Nav from "./Nav";
import Footer from './Footer';
import '../css/Login.css';

class Login extends Component {
    render = () => {
        return (
          
            <div id="login" class="modal fade" role="dialog">
  <div class="modal-dialog">
    
    <div class="modal-content">
      <div class="modal-body">
        <button data-dismiss="modal" class="close">&times;</button>
        <h4>Login</h4>
        <form>
          <input type="text" name="username" class="username form-control" placeholder="Username"/>
          <input type="password" name="password" class="password form-control" placeholder="password"/>
          <input class="btn login" type="submit" value="Login" />
        </form>
      </div>
    </div>
  </div>  
</div>
         );
                 }
                    }

export default Login;