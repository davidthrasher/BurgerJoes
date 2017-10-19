import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';


class Burgerversity extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <main>
          <h1 className="center white-text"> Burgerversity rewards program coming soon!</h1>
        </main>
        <Footer />
      </div>
    );
  }
}

export default Burgerversity;
