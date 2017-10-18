module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		customerId: {
			primaryKey: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		customerName: {
      		type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
    	},
    	customerEmail: {
    		type: DataTypes.STRING,
    		isUnique: true,
    		allowNull: false,
    		validate: {
    			isEmail: true
    		}
    	}
	});

	// Customer.associate = function(models) {
	// 	Customer.hasMany(models.Orders, {
	// 		foreignKey: {
	// 			allowNull: false
	// 		}
	// 	});
	// };
	return Customer;
};
