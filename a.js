var UserAccount = /** @class */ (function () {
    function UserAccount(name, id) {
        this.name = name;
        this.id = id;
    }
    return UserAccount;
}());
var user = new UserAccount("Murphy", 1);
var x = true;
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
var x2 = [{ name: "John" }, { name: "Jane" }];
console.log(x2.map(function (x) { return x.name; }));
var menu = [
    { name: "Margherita", price: 8 },
    { name: "Pepperoni", price: 10 },
    { name: "Hawaiian", price: 10 },
    { name: "Veggie", price: 9 },
];
function addNewPizza(name, price) {
    menu.push({ name: name, price: price });
}
addNewPizza("Cheese", 12);
console.log(menu);
