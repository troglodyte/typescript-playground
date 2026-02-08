## Utility types
* the take other types and 'modify it', returning a new 'type'
* these are built ins
    * https://www.typescriptlang.org/docs/handbook/utility-types.html#requiredtype
* use `<Generics>` syntax


// Finds FIRST instance in an array of an obj with id of 3
[{id:2},{id:3}].find(x => x.id = 3)

// Overwrites and decorates 1st object
Object.assign({a:1}, {a:2. b:3}) // {a:2, b:3}  