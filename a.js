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
