import React from "react";

const Nav = () =>
<nav>
  <div className="nav-wrapper">
    <a href="#!" className="brand-logo">Burger Joes</a>
    <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
    <ul className="right hide-on-med-and-down">
      <li><a href="mobile.html">Login/Sign Up</a></li>
      <li><a href="sass.html">Menu</a></li>
      <li><a href="badges.html">Locations</a></li>
      <li><a href="collapsible.html">Burgerversity</a></li>
    </ul>
    <ul className="side-nav" id="mobile-demo">
      <li><a href="mobile.html">Login/Sign Up</a></li>
      <li><a href="sass.html">Menu</a></li>
      <li><a href="badges.html">Locations</a></li>
      <li><a href="collapsible.html">Burgerversity</a></li>
    </ul>
  </div>
</nav>


export default Nav;
