import React from "react";

const Navbar = () =>
<header>
    <div className="container-fluid">
      <nav>
        <div className="nav-wrapper">
          <a href="/"><img src="./images/BurgerJoesLogo.jpg" className="brand-logo" alt="Burger Joes" /></a>
          <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
          <ul className="right hide-on-med-and-down">
            <li><a href="/login" className="navfont">Login/Sign Up</a></li>
            <li><a href="/menu" className="navfont">Menu</a></li>
            <li><a href="/locations" className="navfont">Locations</a></li>
            <li><a href="/burgerversity" className="navfont">Burgerversity</a></li>
          </ul>
          <ul className="side-nav" id="mobile-demo">
            <li><a href="/login">Login/Sign Up</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/locations">Locations</a></li>
            <li><a href="/burgerversity">Burgerversity</a></li>
          </ul>
        </div>
      </nav>
    </div>
</header>
export default Navbar;
