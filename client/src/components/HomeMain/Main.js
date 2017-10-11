import React from "react";

const Main = () =>
  <main>
    <div className = "container">
      <div className="row">
        <div className="col s12 m12 l12">
          <div className="center">
              <div id= "homeheader">
                Welcome to Burger Joe's!
              </div>
              <span id="ordernow">
                <a href="/menu" id= "orderbutton" className="waves-effect waves-light btn-large"><i className="material-icons right">mood</i>Order Now</a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </main>


export default Main;
