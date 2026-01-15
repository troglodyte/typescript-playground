type Address = {
    street: string,
    city: string,
    country: string
}

type Person = {
    name: string
    age: number
    isStudent: boolean
    address?: Address
}

let person1: Person = {
    name: "Joe",
    age: 42,
    isStudent: true,
    address: {
        street: '1 o ln',
        city: 'fasdf',
        country: 'foo'
    }
}

let person2: Person = {
    name: "Jill",
    age: 66,
    isStudent: false
}