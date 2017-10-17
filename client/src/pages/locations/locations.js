import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import Locate from '../../components/Locate/Locate.js';


class Locations extends Component {
  render() {
    return (
      <div>
        <Nav {...this.props}/>
         <h4 className="header2 white-text center">Our Locations</h4>
          <div className= "row">
            <div className= "col s12 m12 l12">
            <Locate />
            </div>
          </div>
        <Footer />
      </div>
    );
  }
}

export default Locations;
