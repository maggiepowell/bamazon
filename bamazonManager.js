var mysql = require("mysql");
var inquirer = require("inquirer");
var itemsAvailable = [];
// create the connection information for the sql database
var connection = mysql.createConnection({
  host: "localhost",

  // Your port; if not 3306
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "Duk3L3t@",
  database: "bamazonDB"
});
// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    // run the start function after the connection is made to prompt the user
    manager();
  });

function manager() {
// * List a set of menu options:
    inquirer
        .prompt({
            name: "menu",
            type: "items",
            message: "Main Menu:",
            choices: ["View Products for Sale", "View Low Inventory", "Add to Inventory", "Add New Product"]
        })
        .then(function(answer){
            // get the information of the chosen item
            var chosenItem;
            for (var i = 0; i < results.length; i++) {
            if (results[i].item_name === answer.menu) {
                chosenItem = results[i];
            }
            }
            // * If a manager selects `View Products for Sale`, the app should list every available item: the item IDs, names, prices, and quantities.
            if (chosenItem === results[0]){
                connection.query("SELECT item_id, product_name, price, stock_quantity FROM products",
                function (err, results) {
                    for (var i = 0; i < results.length; i++) {
                      console.log("Id: " + results[i].item_id +
                      " || Product: " + results[i].product_name + 
                      " || Price: " + results[i].price +
                      " || Stock: " + results[i].stock_quantity);
                    }
                }
                )}
        })

// * If a manager selects `View Low Inventory`, then it should list all items with an inventory count lower than five.

// * If a manager selects `Add to Inventory`, your app should display a prompt that will let the manager "add more" of any item currently in the store.

// * If a manager selects `Add New Product`, it should allow the manager to add a completely new product to the store.
}
