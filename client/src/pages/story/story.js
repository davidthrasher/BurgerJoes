import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';


class Story extends Component {
  render() {
    return (
      <div>

        <Nav />

        <Footer />
      </div>
    );
  }
}

export default Story;