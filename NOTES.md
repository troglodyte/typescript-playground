# General

## Types
* boolean
* bigint
* null
* number
* string
* symbol
* undefined

## Typescript addes these
* any (anything)
* unknown 
* void
* undefined
* never

## Unions
* `type MyBool = true | false;` <-- using union to create a type that can be true or false

## Type Predicates
| Type | Predicate |
|---|---|
| string | `typeof s === "string"` |
| number | `typeof n === "number"` |
| boolean | `typeof b === "boolean"` |
| undefined | `typeof undefined === "undefined"` |
| function | `typeof f === "function"` |
| array | `Array.isArray(a)` |

## Generics
* `type StringArray = Array<string>`

# Last position
https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html#generics

### Coursera 
https://www.coursera.org/learn/learn-typescript/home/module/1
