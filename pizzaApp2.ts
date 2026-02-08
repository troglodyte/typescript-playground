let idCounter = 0;

type Pizza = {
    id: number
    name: string
    price: number
}

type Order = {
    id: number
    pizza: Pizza
    status: "ordered" | "completed"
}

const menu: Pizza[] = [
    { id:0, name: "Margherita", price: 8 },
    { id:1, name: "Pepperoni", price: 10 },
    { id:2, name: "Hawaiian", price: 10 },
    { id:3, name: "Veggie", price: 9 },
]

function identity<Type>(arg: Type): Type {
  return arg;
}

function loggingIdentity<Type>(arg: Type[]): Type[] {
  console.log(arg.length);
  return arg;
}


function addToArray<T>(array: T[], item: T): T[] {
    array.push(item)
    return array
}

let cashInRegister = 100
let nextOrderId = 1
let nextPizzaId = menu.length
const orderQueue: Order[] = []


// example usage:
addToArray<Pizza>(menu, {id: nextPizzaId++, name: "Chicken Bacon Ranch", price: 12 })
menu[2] && addToArray<Order>(orderQueue, { id: nextOrderId++, pizza: menu[2], status: "ordered" })

console.log(menu)
console.log(orderQueue)

function addNewPizza(pizzaObj: Omit<Pizza, "id">): void {
    menu.push({id: idCounter++, ...pizzaObj})
}

function placeOrder(pizzaName: string): Order|undefined {
    const selectedPizza = menu.find(pizzaObj => pizzaObj.name === pizzaName)
    if (!selectedPizza) {
        console.error(`${pizzaName} does not exist in the menu`)
        return
    }
    cashInRegister += selectedPizza.price
    const newOrder: Order = { id: nextOrderId++, pizza: selectedPizza, status: "ordered" }
    orderQueue.push(newOrder)
    return newOrder
}

const completeOrder = function completeOrder(orderId: number): Order|undefined {
    const order = orderQueue.find(order => order.id === orderId)
    if (typeof order === 'undefined') {
        const msg = 'order is undefined'
        console.error(msg)
        throw new Error(msg)
        return
    }
    order.status = "completed"
    return order
}

const getPizzaDetail = function pizzaDetail(identifier: number|string): Pizza|undefined {
    switch (typeof identifier) {
        case 'string':
            return menu.find(({name}) => name.toLowerCase() === identifier.toLowerCase());
        case 'number':
            return menu.find(pizza => pizza.id === identifier)
    }
    return undefined
}

addNewPizza({name: "Chicken Bacon Ranch", price: 12 })
addNewPizza({name: "BBQ Chicken", price: 12 })
addNewPizza({name: "Spicy Sausage", price: 11 })

placeOrder("Chicken Bacon Ranch")
completeOrder(1)

console.log("Menu:", menu)
console.log("Cash in register:", cashInRegister)
console.log("Order queue:", orderQueue)