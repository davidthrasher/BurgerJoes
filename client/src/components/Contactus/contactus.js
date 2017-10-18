import React, {Component} from "react";
import axios from 'axios';

class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: ""
  }

  sendMail(e) {
  //request to /api/contact
    axios.post('http://localhost:3001/api/contact/', {
      testParam: "hello",
      name: this.state.name,
      emailId: this.state.email,
      message: this.state.message
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
    // this.setState({
    //   name: "",
    //   email: "",
    //   message: ""
    // });
    e.preventDefault()
  }

  setName(e) {
    this.setState({name: e.target.value});
  }

  setEmail(e) {
    this.setState({email: e.target.value});
  }

  setMessage(e) {
    this.setState({message: e.target.value});
  }

  render() {
    return(
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
                                 <input id="name" type="text" value={this.state.name} onChange={this.setName.bind(this)}/>
                                 <label for="first_name">Name</label>
                               </div>
                             </div>
                             <div className="row">
                               <div className="input-field col s12">
                                 <input id="email" type="email" value={this.state.email} onChange={this.setEmail.bind(this)}/>
                                 <label for="email">Email</label>
                               </div>
                             </div>
                             <div className="row">
                               <div className="input-field col s12">
                                 <textarea id="message" className="materialize-textarea" onChange={this.setMessage.bind(this)}>{this.state.message}</textarea>
                                 <label for="message">Message</label>
                               </div>
                               <div className="row">
                                 <div className="input-field col s12">
                                   <button className="btn red darken-4 waves-effect waves-light right" onClick={this.sendMail.bind(this)} name="action">Submit
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
                 </div>
      </main>
    );
  }
}

export default Contact;
