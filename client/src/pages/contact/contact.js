import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import ContactUs from '../../components/Contactus/contactus.js';


class Contact extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <ContactUs />
        <Footer />
      </div>
    );
  }
}

export default Contact;
