import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar/Navbar.js';
import Footer from './components/Footer/Footer.js';
import Main from './components/HomeMain/Main.js';

class App extends Component {
  render() {
    return (
      <div className="App">

        <Nav />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
