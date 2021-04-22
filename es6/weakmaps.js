// Private weakmaps
// turn this public radius property to private
/*
class Circle {
    constructor(radius){
        this.radius = radius;
    }
}


const c = new Circle(1);

console.log(c);
*/
const _radius = new WeakMap(); // Using WeakMap this variable will be collected by Garbage Collector
const _move = new WeakMap(); // Using WeakMap this variable will be collected by Garbage Collector

class Circle {
	constructor(radius) {
		_radius.set(this, radius);

		_move.set(this, () => {
			console.log("move", this);
		});
	}

	draw() {
		_move.get(this)();

		console.log("draw");
	}
}

const c = new Circle(1);

console.log(c.draw());
