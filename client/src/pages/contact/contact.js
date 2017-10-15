import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';


class Contact extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>

        <Footer />
      </div>
    );
  }
}

export default Contact;
