import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import AboutDevs from '../../components/AboutDevs/AboutDevs.js';


class About extends Component {
  render() {
    return (
      <div>

        <Nav />
        <AboutDevs />
        <Footer />
      </div>
    );
  }
}

export default About;
