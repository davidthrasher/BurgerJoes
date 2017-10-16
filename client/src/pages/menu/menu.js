import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import MenuMenu from '../../components/Menu/Menu.js';


class Menu extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <MenuMenu />
        <Footer />
      </div>
    );
  }
}

export default Menu;
