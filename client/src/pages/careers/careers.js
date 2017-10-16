import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Career from '../../components/Careers/Careers.js';

class Careers extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <Career />
        <Footer />
      </div>
    );
  }
}

export default Careers;
