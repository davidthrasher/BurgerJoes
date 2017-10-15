import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Nav from '../../components/Navbar/Navbar.js';
import Footer from '../../components/Footer/Footer.js';
import StoryMain from '../../components/Story/Story.js';


class Story extends Component {
  render() {
    return (
      <div>

        <Nav {...this.props}/>
        <StoryMain />
        <Footer />
      </div>
    );
  }
}

export default Story;
