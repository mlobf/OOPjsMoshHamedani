// Lets find out

//Object.getPrototypeOf(myObj);


// We have two type of members in JS
// Member = Methods and Properties

// Instance Members.
// Prototyper Members.


let myArray = [];

console.log(myArray.__proto__);


function Circle(radius) {
    this.radius = radius;
}

Circle.prototype.draw = function () {
    console.log('draw');
}

const c1 = new Circle(1);
const c2 = new Circle(1);

console.log(c1.prototype);
// Implementing toSting by Base Class Prototype.
Circle.prototype.toString = function () {
    return 'Circle with radius' + this.radius;
}
