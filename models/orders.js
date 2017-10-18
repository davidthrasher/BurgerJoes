module.exports = function(sequelize, DataTypes) {
	var Orders = sequelize.define("Orders", {
		orderNumber: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		orderDate: {
			type: DataTypes.INTEGER,
			allowNull: false,
		},
		customerId: {
			foreignKey: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
	});
	Orders.associate = function(models) {
		Orders.hasOne(models.Customer, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Orders;
};
