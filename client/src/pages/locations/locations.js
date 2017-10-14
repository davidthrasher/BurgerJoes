import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Locate from '../../components/Locate/Locate.js';


class Locations extends Component {
  render() {
    return (
      <div>

        <Nav />
        <Locate />
        <Footer />
      </div>
    );
  }
}

export default Locations;
