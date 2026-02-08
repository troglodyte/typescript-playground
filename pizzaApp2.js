var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var idCounter = 0;
var menu = [
    { id: 0, name: "Margherita", price: 8 },
    { id: 1, name: "Pepperoni", price: 10 },
    { id: 2, name: "Hawaiian", price: 10 },
    { id: 3, name: "Veggie", price: 9 },
];
var cashInRegister = 100;
var nextOrderId = 1;
var orderQueue = [];
function addNewPizza(pizzaObj) {
    menu.push(__assign({ id: idCounter++ }, pizzaObj));
}
function placeOrder(pizzaName) {
    var selectedPizza = menu.find(function (pizzaObj) { return pizzaObj.name === pizzaName; });
    if (!selectedPizza) {
        console.error("".concat(pizzaName, " does not exist in the menu"));
        return;
    }
    cashInRegister += selectedPizza.price;
    var newOrder = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" };
    orderQueue.push(newOrder);
    return newOrder;
}
var completeOrder = function completeOrder(orderId) {
    var order = orderQueue.find(function (order) { return order.id === orderId; });
    if (typeof order === 'undefined') {
        var msg = 'order is undefined';
        console.error(msg);
        throw new Error(msg);
        return;
    }
    order.status = "completed";
    return order;
};
var getPizzaDetail = function pizzaDetail(identifier) {
    switch (typeof identifier) {
        case 'string':
            return menu.find(function (_a) {
                var name = _a.name;
                return name.toLowerCase() === identifier.toLowerCase();
            });
        case 'number':
            return menu.find(function (pizza) { return pizza.id === identifier; });
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
