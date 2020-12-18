interface Point {
	x:number
	y:number
	printDot(x:number, y:number) : void;
}

class point implements Point {
	x : number;
	y : number;

	constructor(x:number, y:number) {
		this.x = x;
		this.y = y;
	}

	printDot() {
		console.log(`dot position is (${this.x},${this.y})`);
	}
}

let p1 = new point(3,5)

p1.printDot()




