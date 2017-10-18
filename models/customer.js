module.exports = function(sequelize, DataTypes) {
	var Customer = sequelize.define("Customer", {
		customerId: {
			primaryKey: true,
			autoIncrement: true,
			type: DataTypes.INTEGER,
			allowNull: false
		},
		customerFirstName: {
      		type: DataTypes.STRING,
      		allowNull: false,
      		validate: {
        		len: [1]
      		}
    	},
    	customerLastName: {
    		type: DataTypes.STRING,
    		allowNull: false,
    		validate: {
    			len: [1]
    		}
    	},
    	customerPhone: {
    		type: DataTypes.INTEGER,
    		allowNull: false,
    		validate: {
    			len: [1, 10]
    		}
    	},
    	customerState: {
    		type: DataTypes.STRING,
    		allowNull: false,
    		validate: {
    			len: [1]
    		}
    	},
    	customerCity: {
    		type: DataTypes.STRING,
    		allowNull: false,
    		validate: {
    			len: [1]
    		}
    	},
    	customerZip: {
    		type: DataTypes.INTEGER,
    		allowNull: false,
    		validate: {
    			len: [1, 5]
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

	Customer.associate = function(models) {
		Customer.hasMany(models.Orders, {
			foreignKey: {
				allowNull: false
			}
		});
	};
	return Customer;
};
