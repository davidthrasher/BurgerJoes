import React from "react";

const Jumbotron = () =>
<header>
  <div id="burgertron" className="jumbotron">
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper">
          <a href="#" target="_blank"><img src="./BurgerJoesLogo.jpg" className="brand-logo" alt="Burger Joes" /></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="mobile.html" className="navfont">Login/Sign Up</a></li>
            <li><a href="sass.html" className="navfont">Menu</a></li>
            <li><a href="badges.html" className="navfont">Locations</a></li>
            <li><a href="collapsible.html" className="navfont">Burgerversity</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="mobile.html">Login/Sign Up</a></li>
            <li><a href="sass.html">Menu</a></li>
            <li><a href="badges.html">Locations</a></li>
            <li><a href="collapsible.html">Burgerversity</a></li>
          </ul>
        </div>
      </nav>
    </div>
  </div>
</header>
export default Jumbotron;
