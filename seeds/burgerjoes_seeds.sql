CREATE DATABASE burgerJoes;

USE burgerJoes;
CREATE TABLE customer(
	customerID INT AUTO_INCREMENT,
    customerName VARCHAR (50) NOT NULL,
    customerEmail VARCHAR(50) NOT NULL,
    PRIMARY KEY (customerID)
);

CREATE TABLE menu(
	menuID INT AUTO_INCREMENT,
    menuType VARCHAR (50) NOT NULL,
	menuItem VARCHAR (50) NOT NULL,
    menuPrice DECIMAL (5,2) NOT NULL,
    PRIMARY KEY (menuID)
);

CREATE TABLE orders(
	orderNumber INT AUTO_INCREMENT,
    orderDATE DATETIME NOT NULL,
    customerID INT NOT NULL,
    PRIMARY KEY (orderNumber),
    FOREIGN KEY (customerID) REFERENCES customer(customerID)
);

CREATE TABLE orderDetails(
	orderNumber INT NOT NULL,
    menuID INT NOT NULL,
    itemQuantity INT NOT NULL,
    orderComments VARCHAR (255),
    FOREIGN KEY (menuID) REFERENCES menu(menuID),
    FOREIGN KEY (orderNumber) REFERENCES orders(orderNumber)
);
