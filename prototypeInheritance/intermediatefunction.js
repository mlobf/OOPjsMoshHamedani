// Intermediate Function Inheritance.
// This is represented as "Extend function"
// Lets create a Square object that Inheritances from the shape.

console.log('============ Lesson 35 Intermediate inheritance Function ==============');

function Shape(color) {
    this.color = color;
}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
};

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Circle(radius, color) {
    Shape.call(this, color);
    this.radius = radius;
}

extend(Circle, Shape);

Circle.prototype.draw = function () {
    console.log('draw');
}

function Square(size) {
    this.size = size;
}

extend(Square, Shape);

const s = new Shape();
const c = new Circle(1, 'red');
