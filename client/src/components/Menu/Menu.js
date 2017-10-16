import React from "react";

const Menu = () =>

<main>

	<h1 className="center white-text">Menu</h1>

	<div className="row">
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Burgers</p>
				<a href="/menu/burgers"><img src="./images/foodpics/burgernail.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Chicken Sandwiches</p>
				<a href="/menu/chickensandwiches"><img src="./images/foodpics/chickensandwich.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Salads</p>
				<a href="/menu/salads"><img src="./images/foodpics/salad.jpeg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Tenders</p>
				<a href="/menu/tenders"><img src="./images/foodpics/tenders.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Wings</p>
				<a href="/menu/wings"><img src="./images/foodpics/wings.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Sides</p>
				<a href="/menu/sides"><img src="./images/foodpics/fries.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Desserts</p>
				<a href="/menu/desserts"><img src="./images/foodpics/dessert.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
		<div className="col s6 offset-m2 m4 l3">
				<p className="white-text">Drinks</p>
				<a href="/menu/drinks"><img src="./images/foodpics/drinks.jpg" className="menuitem" alt="Burger Joes"/></a>

		</div>
	</div>

</main>
export default Menu;
