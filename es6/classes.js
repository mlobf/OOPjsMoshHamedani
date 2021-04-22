// Babel compiles new JS files to older JS versions.

// Classes on ES6
/* First the old way

function Circle(radius){
    this.radius = radius;

    this.draw = function(){
        console.log('draw');
    }
}
*/
// Now the new way

class Circle {
	constructor(radius) {
		this.radius = radius;
	}
	// Add the draw method
	draw() {
		//console.log("draw");
	}
	teste() {
		console.log("oi oi oi oi o");
	}
}

const c = new Circle(1);

console.log(typeof c);

console.log(c.teste());
