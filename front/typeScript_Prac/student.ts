import {Person} from './person';

class student extends Person {
	study() : string {
		return `${this.name} is studying..`;
	}
}

const std = new student('Deru');

console.log(std.sayHello());
console.log(std.study());
