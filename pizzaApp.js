const menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
]

let cashInRegister = 100
const orderQueue = []
let nextOrderId = 0;

function addNewPizza(pizzaObj) {
    menu.push(pizzaObj)
}

/**
 * Write another utility function, placeOrder, that takes a pizza name parameter and:
 * 1. finds that pizza object in the menu,
 * 2. adds the income to the cashInRegister,
 * 3. pushes a new "order object" to the orderQueue
 *    (e.g. { pizza: selectedPizzaObjectFromStep1, status: "ordered" })
 * 4. returns the new order object (just in case we need it later)
 */

function placeOrder(pizzaName) {
    	let pizza = menu.find(p => p.name == pizzaName);
	cashInRegister = cashInRegister + pizza.price;
	orderQueue.push({pizza: pizzaName, status: "ordered", orderId: nextOrderId});
	return orderQueue;
}
let x = placeOrder("Veggie");
console.log(x)
console.log("\n" + cashInRegister)

/**
 * Challenge: write another utility function, completeOrder, that takes an orderId as a parameter
 * finds the correct order in the orderQueue, and marks its status as "completed". For good measure,
 * return the found order from the function.
 * 
 * Note: you'll need to ensure that we're adding IDs to our orders when we create new orders. You can use a global `nextOrderId` variable and increment it every time a new order is created to simulate real IDs being managed for us by a database.
 */

function completeOrder(orderId) {
	const order = orderQueue.find(o => o.orderId = orderId);
	order.status = 'completed';
	return order;
		
}

console.log(completeOrder(0));


