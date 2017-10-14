import React from "react";

const AboutDevs = () =>
  <main>
    <div class="row devInfo">
      <div class="container">
        <h3 id="meetthe">Meet The Developers</h3>
      </div>
    </div>


    <div id="alldevs" class= "container">

      <div class= "col-md-12">
        <div class= "panel panel-default" id="devpanel">
          <div class= "row">

            <div class= "col-md-3">
              <img class="img-responsive center-block"  src="images/David.PNG" alt="Picture" />
            </div>

            <div id="devtext" class= "col-md-9">
              <h3 id="devname" class="center">David Thrasher</h3>
              <p class="center">An avid fan of all things music and technology, David Thrasher is a Fullstack Developer hailing from Atlanta, Ga. Follow him on his coding adventures by clicking the GitHub and Linkedin links below!</p>
              <p class="center"><a target="_blank" href="https://github.com/davidthrasher" class="btn btn-primary" role="button">GitHub</a> <a target="_blank" href="https://www.linkedin.com/in/david-thrasher/" class="btn btn-default" role="button">Linkedin</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class= "col-md-12">
        <div class= "panel panel-default" id="devpanel">
          <div class= "row">

            <div id="devtext" class= "col-md-9">
              <h3 id="devname" class="center">Ryan Hardeman</h3>
              <p class="center">A seasoned advertising professional, father, mountain biker & zymurgist. Jeff is a Full Stack Developer that thrives on having a good problem to solve. Connect with Jeff and see what he has brewing on his Github and LinkedIn.</p>
              <p class="center"><a target="_blank" href="https://github.com/jliip51" class="btn btn-primary" role="button">GitHub</a> <a target="_blank" href="https://www.linkedin.com/in/jeff-liipfert-663a565/" class="btn btn-default" role="button">Linkedin</a></p>
            </div>

            <div class= "col-md-3">
              <img class="img-responsive center-block" src="images/Jeff.PNG" alt="Picture" />
            </div>

          </div>
        </div>
      </div>

      <div class= "col-md-12">
        <div class= "panel panel-default" id="devpanel">
          <div class= "row">

            <div class= "col-md-3">
              <img class="img-responsive center-block" src="images/Siddharth.PNG" alt="Picture" />
            </div>

            <div id="devtext" class= "col-md-9">
              <h3 id="devname" class="center">Siddharth Patel</h3>
              <p class="center">Sid moved to Atlanta from India. Sid is a full stack developer, He likes football, cricket and burgers!! You can connect with him using the buttons below.     </p>
            <p class="center"><a target="_blank" href="https://github.com/sid845" class="btn btn-primary" role="button">GitHub</a> <a target="_blank" href="https://www.linkedin.com/in/siddharth-patel-456506134/" class="btn btn-default" role="button">Linkedin</a></p>
            </div>
          </div>
        </div>
      </div>

      <div class= "col-md-12">
        <div class= "panel panel-default" id="devpanel">
          <div class= "row">

            <div id="devtext" class= "col-md-9">
              <h3 id="devname" class="center">Harrison McCord</h3>
              <p class="center">Harrison is a Full Stack Developer with a background in Computer Science. Check this guy out on Github or Linkedin below!</p>
            <p class="center"><a target="_blank" href="https://github.com/Proscope" class="btn btn-primary" role="button">GitHub</a> <a target="_blank" href="https://www.linkedin.com/in/harrison-mccord/" class="btn btn-default" role="button">Linkedin</a></p>
            </div>

            <div class= "col-md-3">
              <img class="img-responsive center-block" src="images/James.PNG" alt="Picture"/>
            </div>
          </div>
        </div>
      </div>

    </div>


  </main>


export default AboutDevs;
