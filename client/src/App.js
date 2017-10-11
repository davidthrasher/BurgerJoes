import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav/Nav.js';
import Jumbotron from './components/Jumbotron/Jumbotron.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/HomeMain/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Jumbotron />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
