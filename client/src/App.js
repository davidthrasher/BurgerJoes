import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/home/home.js";
import About from "./pages/aboutthedevs/aboutthedevs.js";
import Burger from "./pages/burgerversity/burgerversity.js";
import Careers from "./pages/careers/careers.js";
import Contact from "./pages/contact/contact.js";
import Locations from "./pages/locations/locations.js";
import Menu from "./pages/menu/menu.js";
import Story from "./pages/story/story.js";


const App = () =>
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/burgerversity" component={Burger} />
        <Route exact path="/careers" component={Careers} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/locations" component={Locations} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/story" component={Story} />
      </Switch>
    </div>
  </Router>;

export default App;
