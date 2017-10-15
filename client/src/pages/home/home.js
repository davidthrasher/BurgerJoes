import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Main from '../../components/HomeMain/Main.js';

class Home extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <Main />
        <Footer />
      </div>
    );
  }
}

export default Home;
