# bamazon

Bamazon is a storefront app used to take in orders and deplete stock from the store's inventory. It uses node and mySql along with the npm packages for inquirer and mySql.

## How to Use:

1. In your terminal, run node bamazonCustomer.js. The first thing you will be prompted with is a table of the products available to purchase along with their price.
    
2. Next you will be prompted for how many units you would like to buy.
    
3. Once you have placed your order, the application will check the store to make sure there is enough product to fill your order. It will then return your order total and the amount of stock left in the store.

4. If there is enough stock to fill your order, it will be fulfilled and the SQL database will be updated to reflect the remaining quantity. 

5. Once the update goes through, you will be shown the total cost of your order.


## Screenshots:

! [Bamazon choose item screen] (/bamazon_choose_item.png)

! [Bamazon how many prompt screen] (/bamazon_how_many.png)

! [Bamazon final total & stock quantity] (//bamazon_final.png)
