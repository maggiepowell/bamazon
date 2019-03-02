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
  displayItems();
});

// first display all of the items available for sale. Include the ids, names, and prices of products for sale.
function displayItems() {

  // query the database for all items being auctioned
  connection.query("SELECT item_id, product_name, stock_quantity, price FROM products",
    function (err, results) {
      if (err) throw err;
      itemsAvailable = [];
      for (var i = 0; i < results.length; i++) {
        itemsAvailable.push(results[i].product_name);
      }
      queryDB(null, itemsAvailable)
    },
  );
}

//function to query db for all items being auctioned
function queryDB(err, results) {
  if (err) throw err;
  console.log("results: " + results);

  inquirer
    .prompt([
      {
        name: "choice",
        type: "list",
        choices: itemsAvailable,
        message: "Items available for sale:"
      },
      // //    * ask them the ID of the product they would like to buy.
      //       {
      //         name: "askForId",
      //         type: "input",
      //         message: "What product ID would you like to purchase?"
      //       },
      //    * ask how many units of the product they would like to buy.
      {
        name: "howManyUnits",
        type: "input",
        message: "How many units would you like to buy?"
      }
    ])
    // once the customer has placed the order, check if your store has enough of the product to meet the customer's request.
    .then(function (answer) {
      console.log(answer);
      console.log(results);
      var chosenItem;
      for (var i = 0; i < results.length; i++) {
        console.log("results[i]: " + results[i]);
        if (results[i].product_name === answer.choice) {
          chosenItem = results[i];
          console.log("chosenItem 76: " + chosenItem);

        }
      }
      console.log("chosenItem 80: " + chosenItem);
        if (chosenItem.stock_quantity > parseInt(answer.howManyUnits)) {
        // if your store _does_ have enough of the product, you should fulfill the customer's order.
        connection.query(
          "UPDATE products SET ? WHERE ?",
          [
            {
              stock_quantity: answer.howManyUnits
            },
            {
              item_id: chosenItem.id
            }
          ],
          function (error) {
            if (error) throw err;
            console.log("Item in stock!");
            displayItems();
          }
        );

      }
      //If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.
      else {
        console.log("Insufficient quantity!");
        displayItems();
      }

    });
  }
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.
