import React from "react";

const Main = () =>
  <main>
    <div className = "container">
      <div className="row">
        <div className="col s12 m12 l12">
          <div id="orderpanel" className="card-panel">
            <div className="row">
              <div className="center">
                <span id="ordernow">
                  <a id= "orderbutton" className="waves-effect waves-light btn-large"><i className="material-icons right">mood</i>Order Now</a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>


export default Main;
