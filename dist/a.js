class UserAccount {
    name;
    id;
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new UserAccount("Murphy", 1);
const x = true;
function getLength(obj) {
    return obj.length;
}
function wrapInArray(obj) {
    if (typeof obj === 'string') {
        return [obj];
    }
    return obj;
}
let x2 = [{ name: "John" }, { name: "Jane" }];
console.log(x2.map(x => x.name));
let x3 = 'guest';
export {};
//# sourceMappingURL=a.js.map