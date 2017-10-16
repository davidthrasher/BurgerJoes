import React from "react";

const Careers = () =>

<main>

  <h1 className="center white-text">Careers</h1>
  <div className="row">
    <div className="col s12 m12 l12">
      <div id="applycard" className="card red darken-4 center">
        <div className="white-text center">
          Come join a fun, fast paced and rewarding team at Burger Joe's! We're always looking for hard working, driven individuals who come to work ready to serve our customers with a smile! If this sounds like you, apply today!
        </div>
        <a target="_blank" href="../../application.pdf" className="waves-effect waves-light btn-large black">Apply Now</a>
      </div>
    </div>
  </div>
  <div className="row">
    <div className="col s12 m12 l6">
      <div className="card red darken-4 center">
        <img src="./images/sourceimages/storefront.jpg" className="careers" alt="Burger Joes"/>
      </div>
    </div>
    <div className="col s12 m12 l6">
      <div className="card red darken-4 center">
        <img src="./images/sourceimages/apparel.jpg" className="careers" alt="Burger Joes"/>
      </div>
    </div>
  </div>

</main>

export default Careers;
