import React from "react";
import Modal from './Modal';
import PropTypes from 'prop-types';

class App extends Component {
	constructor(props) {
	  super(props);
    this.state = { isOpen: false };
	}

	toggleModal = () => {
	  this.setState({
	    isOpen: !this.state.isOpen
	  });
	}

<main>

	<h1 className="center white-text">Menu</h1>

		<div className="row">
		<div className="col s6 m4 l3">
			<div className="card">
				<div className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/burgernail.jpg" /></a>
					<span className="card-title">Burgers</span>
					<a onClick={this.toggleModal} className="btn-floating halfway-fab waves-effect waves-light red" ><i className="material-icons">add</i></a>
					<Modal show={this.state.isOpen} onClose={this.toggleModal}>
					  Here's some content for the modal
					</Modal>
				</div>
			</div>
		</div>



		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/chickensandwich.jpg" /></a>
					<span className="card-title black-text">Chicken Sandwiches</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>

			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/salad.jpeg" /></a>
					<span className="card-title black-text">Salads</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/tenders.jpg" /></a>
					<span className="card-title black-text">Tenders</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/wings.jpg" /></a>
					<span className="card-title black-text">Wings</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/fries.jpg" /></a>
					<span className="card-title black-text">Sides</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/dessert.jpg" /></a>
					<span className="card-title black-text">Desserts</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>

		<div className="col s6 m4 l3">
			<div className="card">
				<div className="menuitem" className="card-image">
					<a href="#"><img className="menuitem" src="./images/foodpics/drinks.jpg" /></a>
					<span className="card-title black-text">Drinks</span>
					<a className="btn-floating halfway-fab waves-effect waves-light red" data-target="ordermodal" class="btn modal-trigger"><i className="material-icons">add</i></a>
				</div>
			</div>
		</div>
	</div>

</main>
}
export default Menu;
