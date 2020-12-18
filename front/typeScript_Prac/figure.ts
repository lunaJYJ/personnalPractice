interface figure {
	width : number
	color : string
}

class Circle implements figure {

	width : number;
	color : string

	constructor (
		width : number,
		color : string
	) {this.width=width; this.color = color}
	
	getArea() : number {
		return this.width*this.width*3.14
	}

	getColor() : string {
		return this.color
	}
}

let c1 = new Circle(10, 'skyblue');

console.log(c1.getArea());
console.log(c1.getColor());



