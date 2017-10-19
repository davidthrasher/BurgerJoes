import React, {Component} from "react";
import axios from 'axios';
import Modal from '../Modal/Modal'
import MenuList from './Items'

class MenuItem extends Component {
		state = {
			quantity: 0
		}

		onQuantity(e) {
				this.setState({quantity: e.target.value});
				this.props.onQuantity(this.props.item.type, e.target.value);
		}

		render() {
			var item = this.props.item;
			return(
				<tr>
            <td>
                <label>{item.type}</label>
            </td>
            <td>
                <label>{item.desc}</label>
            </td>
            <td>
                <input type="number" min="0" max="50" value={this.state.quantity} onChange={this.onQuantity.bind(this)}/>
            </td>
        </tr>
			);
		}
}

class MenuCard extends Component {
	render() {
		return(
			<div className="col s6 m4 l3">
				<div className="card">
					<div className="card-image">
						<a href="#"><img className="menuitem" src={this.props.item.src} /></a>
						<span className="card-title">{this.props.item.name}</span>
						<a className="btn-floating halfway-fab waves-effect waves-light red" onClick={this.props.openModal}><i className="material-icons">add</i></a>
					</div>
				</div>
			</div>
		);
	}
}

class Menu extends Component {

	state = {
		modalShow: false
	}

	currentItem = {
		types: {}
	};

	itemList = [
		{
			id: '1',
			name: 'Burgers',
			src: './images/foodpics/burgernail.jpg'
		},
		{
			id: '2',
			name: 'Chicken Sandwiches',
			src: './images/foodpics/chickensandwich.jpg'
		},
		{
			id: '3',
			name: 'Salads',
			src: './images/foodpics/salad.jpeg'
		},
		{
			id: '4',
			name: 'Tenders',
			src: './images/foodpics/tenders.jpg'
		},
		{
			id: '5',
			name: 'Wings',
			src: './images/foodpics/wings.jpg'
		},
		{
			id: '6',
			name: 'Sides',
			src: './images/foodpics/fries.jpg'
		},
		{
			id: '7',
			name: 'Desserts',
			src: './images/foodpics/dessert.jpg'
		},
		{
			id: '8',
			name: 'Drinks',
			src: './images/foodpics/drinks.jpg'
		}
	];

	openModal(item) {
		this.currentItem.name = item
		this.setState({modalShow: true});
	}

	closeModal() {
		this.currentItem = {
			types: {}
		};
		this.setState({modalShow: false});
	}

	onOrder() {
		console.log(this.currentItem);
		var params = {
			name: this.currentItem.name,
			orders: []
		}

		for(var key in this.currentItem.types) {
			params.orders.push({
				type: key,
				quantity: this.currentItem.types[key]
			})
		}

		axios.post('http://localhost:3001/api/menu/order', params)
		.then(function (response) {
			console.log(response);
		})
		.catch(function (error) {
			console.log(error);
		});
	}

	onQuantity(itemType, quantity) {
		this.currentItem.types[itemType] = quantity;
	}

	render() {
		return(
			<main>

				<Modal
					show={this.state.modalShow}
					onClose={this.closeModal.bind(this)}
					btnText="Order"
					actionHandler={this.onOrder.bind(this)}
				>
					<h1>{this.currentItem.name}</h1>
					<table>
						{
							(MenuList[this.currentItem.name] || []).map(function(menuItem) {
								return <MenuItem item={menuItem} onQuantity={this.onQuantity.bind(this)}/>
							}.bind(this))
						}
					</table>
				</Modal>

				<h1 className="center white-text">Menu</h1>
				
				<a target="_blank" href="../../menu.pdf" className="waves-effect waves-light btn-large black">Printable Menu</a>
				<div className="row">
					{
						this.itemList.map(function(item){
							return <MenuCard key={item.id} item={item} openModal={this.openModal.bind(this, item.name)}/>
						}.bind(this))
					}
				</div>
			</main>
		);
	}
}

export default Menu;
