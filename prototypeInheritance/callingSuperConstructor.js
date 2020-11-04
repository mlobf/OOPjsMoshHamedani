// Calling Super Constructor.

console.log('============ Lesson 34 => Calling the Super Constructor ==============');

function Shape(color) {
    this.color = color;

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle(radius) {
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.draw = function () {
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
