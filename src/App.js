import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import Main from './Components/Main';
import Header from './Components/Header';
import Footer from './Components/Footer';
class App extends Component {
  constructor(){
    super();

  }

  render=()=>{
    return (
      <div className="App">
        <header className="App-header">
       <Header/>
        </header>
        <p className="App-Body">
       {/*  <Main/>*/}
        </p>
      <footer className="App-footer">
      <Footer/>
      </footer>

      </div>
    );
  }
}

export default App;
