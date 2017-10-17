import React from 'react';
import { Redirect, Route, Router } from 'react-router-dom';
import Callback from './Callback/Callback';

import Home from "./pages/home/home.js";
import About from "./pages/aboutthedevs/aboutthedevs.js";
import Burger from "./pages/burgerversity/burgerversity.js";
import Careers from "./pages/careers/careers.js";
import Contact from "./pages/contact/contact.js";
import Locations from "./pages/locations/locations.js";
import Menu from "./pages/menu/menu.js";
import Story from "./pages/story/story.js";
import Auth from './Auth/Auth';
import history from './history';


const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const App = () => {
  return (
    <Router history={history} component={Home}>
        <div>
          {/* <Route exact path="/login" render={(props) => <Login auth={auth} {...props} />} /> */}
          <Route exact path="/about" render={(props) => <About auth={auth} {...props} />} />
          <Route exact path="/burgerversity" render={(props) => <Burger auth={auth} {...props} />} />
          <Route exact path="/careers" render={(props) => <Careers auth={auth} {...props} />} />
          <Route exact path="/contact" render={(props) => <Contact auth={auth} {...props} />} />
          <Route exact path="/locations" render={(props) => <Locations auth={auth} {...props} />} />
          <Route exact path="/menu" render={(props) => <Menu auth={auth} {...props} />} />
          <Route exact path="/story" render={(props) => <Story auth={auth} {...props} />} />
          <Route exact path="/" render={(props) => <Home auth={auth} {...props} />} />

          {/* <Route  path="/profile" render={(props) => (
            !auth.isAuthenticated() ? (
              <Redirect to="/home"/>
            ) : (
              <Profile auth={auth} {...props} />
            )
          )} /> */}
          <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} />
          }}/>
        </div>
      </Router>
  );
}


export default App;
