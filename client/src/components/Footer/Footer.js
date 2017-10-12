import React from "react";

const Footer = () =>
    <footer className="page-footer">
         <div className="container">
           <div className="row">
             <div className="col l6 s12">
               <h5 className="white-text">Connect with us!</h5>
               <a href="#" target="_blank"><img src="./SocialIcons/facebook.png" className="social" alt="Facebook" /></a>
               <a href="#" target="_blank"><img src="./SocialIcons/instagram.png" className="social" alt="Instagram" /></a>
               <a href="https://twitter.com/BurgerJoesAtl" target="_blank"><img src="./SocialIcons/twitter.png" className="social" alt="Twitter" /></a>
             </div>
             <div className="col l4 offset-l2 s12">
               <ul>
                 <li><a className="grey-text text-lighten-3" href="/contact">Contact Us</a></li>
                 <li><a className="grey-text text-lighten-3" href="/careers">Careers</a></li>
                 <li><a className="grey-text text-lighten-3" href="/story">Our Story</a></li>
                 <li><a className="grey-text text-lighten-3" href="/about">About The Developers</a></li>
               </ul>
             </div>
           </div>
         </div>
         <div className="footer-copyright">
           <div className="container">
           © <span id="footerdate"></span> Burger Joes
           </div>
         </div>
       </footer>


export default Footer;
