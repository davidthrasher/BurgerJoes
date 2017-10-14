module.exports = function(sequelize, DataTypes) {
	var OrderDetails = sequelize.define("OrderDetails", {
		orderNumber: {
			foreignKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		menuId: {
			foreignKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		itemQuantity: {
			type: DataTypes.INTEGER,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		orderComments: {
			type: DataTypes.STRING
		},
	});
	OrderDetails.associate = function(models) {
		OrderDetails.hasOne(models.Orders, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	OrderDetails.associate = function(models) {
		OrderDetails.hasMany(models.Menu, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return OrderDetails;
};