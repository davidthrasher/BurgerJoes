module.exports = function(sequelize, DataTypes) {
	var Menu = sequelize.define("Menu", {
		menuType: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		menuItem: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [1]
			}
		},
		menuPrice: {
			type: DataTypes.DECIMAL,
			allowNull: false,
			validate: {
				len: [5, 2]
			}
		}
	});
	Menu.associate = function(models) {
		Menu.belongsTo(models.OrderDetails, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Menu;
};
