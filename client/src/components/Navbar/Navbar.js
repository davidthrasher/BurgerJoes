import React, { Component } from 'react';

class Navbar extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {

    const { isAuthenticated } = this.props.auth;

    return (
      <div>
      <header>
          <div className="container-fluid">
            <nav>
              <div className="nav-wrapper">
                <a href="/"><img src="./images/BurgerJoesLogo.jpg" className="brand-logo" alt="Burger Joes" /></a>
                <a href="#" data-activates="mobile-demo" className="button-collapse"><i className="material-icons">menu</i></a>
                <ul className="right hide-on-med-and-down">
                <li>
                  {
                    !isAuthenticated() && (
                        <a
                          bsStyle="primary"
                          onClick={this.login.bind(this)}
                        >
                          Sign In/Sign Up
                        </a>
                      )
                  }
                  {
                    isAuthenticated() && (
                        <a
                          bsStyle="primary"
                          onClick={this.logout.bind(this)}
                        >
                          Sign Out
                        </a>
                      )
                  }
                </li>
                  {/* <li><a href="/login" className="loginbutton" className="navfont">Login/Sign Up</a></li> */}
                  <li><a href="/menu" className="navfont">Menu</a></li>
                  <li><a href="/locations" className="navfont">Locations</a></li>
                  <li><a href="/burgerversity" className="navfont">Burgerversity</a></li>
                </ul>
                <ul className="side-nav" id="mobile-demo">
                  <li>
                    {
                      !isAuthenticated() && (
                          <a
                            bsStyle="primary"
                            onClick={this.login.bind(this)}
                          >
                            Sign In/Sign Up
                          </a>
                        )
                    }
                    {
                      isAuthenticated() && (
                          <a
                            bsStyle="primary"
                            onClick={this.logout.bind(this)}
                          >
                            Sign Out
                          </a>
                        )
                    }
                  </li>
                  <li><a href="/menu">Menu</a></li>
                  <li><a href="/locations">Locations</a></li>
                  <li><a href="/burgerversity">Burgerversity</a></li>
                </ul>
              </div>
            </nav>
          </div>
      </header>
      </div>
    )
  }
}

export default Navbar;
