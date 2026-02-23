let idCounter = 0;
const menu = [
    { id: 0, name: "Margherita", price: 8 },
    { id: 1, name: "Pepperoni", price: 10 },
    { id: 2, name: "Hawaiian", price: 10 },
    { id: 3, name: "Veggie", price: 9 },
];
function identity(arg) {
    return arg;
}
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
function addToArray(array, item) {
    array.push(item);
    return array;
}
let cashInRegister = 100;
let nextOrderId = 1;
let nextPizzaId = menu.length;
const orderQueue = [];
// example usage:
addToArray(menu, { id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 });
menu[2] && addToArray(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "ordered" });
console.log(menu);
console.log(orderQueue);
function addNewPizza(pizzaObj) {
    menu.push({ id: idCounter++, ...pizzaObj });
}
function placeOrder(pizzaName) {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName);
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`);
        return;
    }
    cashInRegister += selectedPizza.price;
    const newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
const completeOrder = function completeOrder(orderId) {
    const order = orderQueue.find(order => order.id === orderId);
    if (typeof order === 'undefined') {
        const msg = 'order is undefined';
        console.error(msg);
        throw new Error(msg);
        return;
    }
    order.status = "completed";
    return order;
};
const getPizzaDetail = function pizzaDetail(identifier) {
    switch (typeof identifier) {
        case 'string':
            return menu.find(({ name }) => name.toLowerCase() === identifier.toLowerCase());
        case 'number':
            return menu.find(pizza => pizza.id === identifier);
    }
    return undefined;
};
addNewPizza({ name: "Chicken Bacon Ranch", price: 12 });
addNewPizza({ name: "BBQ Chicken", price: 12 });
addNewPizza({ name: "Spicy Sausage", price: 11 });
placeOrder("Chicken Bacon Ranch");
completeOrder(1);
console.log("Menu:", menu);
console.log("Cash in register:", cashInRegister);
console.log("Order queue:", orderQueue);
export {};
//# sourceMappingURL=pizzaApp2.js.map