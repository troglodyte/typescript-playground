interface User {
	name: string;
	id: number;
}

class UserAccount {
	name: string;
	id: number;

	constructor(name: string, id: number) {
		this.name = name;
		this.id = id;
	}
}

const user: User = new UserAccount("Murphy", 1);

type MyBool = true | false;
const x: MyBool = true;

type WindowStates = "open" | "closed" | "vapor";


function getLength(obj: string | string[]): number {
	return obj.length;
}

function wrapInArray(obj: string | string[]) {
	if (typeof obj === 'string') {
		return [obj]
	}
	return obj
}

type StringArray = Array<string>
type NumberArray = Array<number>
type ObjectWithNameArray = Array<{ name: string }>

let x2: ObjectWithNameArray = [{ name: "John" }, { name: "Jane" }]
console.log(x2.map(x => x.name));


