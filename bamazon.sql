DROP DATABASE IF EXISTS bamazonDB;
CREATE database bamazonDB;

USE bamazonDB;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(45) NOT NULL,
  price DECIMAL(10,2) NOT NULL,
  stock_quantity INTEGER(10) NULL,
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("pen", "office supplies", 1, 100), ("laptop", "office supplies", 1000, 50), ("calculator", "office supplies", 10, 80), ("gummy bears", "candy", 3, 150), ("chocolate bar", "candy", 3, 150), ("copy paper", "office supplies", 6, 100), ("t-shirt", "clothing", 20, 75), ("sweatshirt", "clothing", 40, 75), ("hat", "clothing", 15, 60), ("mints", "candy", 2, 100);

SELECT * FROM products;