import React from "react";

const Contact = () =>

<main>

  <div id="basic-form" className="section">
             <div className="row">
               <div className="col s12 m12 l12">
                 <div className="card-panel">
                   <h4 className="header2">Contact Us</h4>
                   <div className="row">
                     <form className="col s12">
                       <div className="row">
                         <div className="input-field col s12">
                           <input id="name" type="text" />
                           <label for="first_name">Name</label>
                         </div>
                       </div>
                       <div className="row">
                         <div className="input-field col s12">
                           <input id="email" type="email" />
                           <label for="email">Email</label>
                         </div>
                       </div>
                       <div className="row">
                         <div className="input-field col s12">
                           <textarea id="message" className="materialize-textarea"></textarea>
                           <label for="message">Message</label>
                         </div>
                         <div className="row">
                           <div className="input-field col s12">
                             <button className="btn cyan waves-effect waves-light right" type="submit" name="action">Submit
                               <i className="mdi-content-send right"></i>
                             </button>
                           </div>
                         </div>
                       </div>
                     </form>
                   </div>
                 </div>
               </div>
             </div>
           </div>;



</main>

export default Contact;
