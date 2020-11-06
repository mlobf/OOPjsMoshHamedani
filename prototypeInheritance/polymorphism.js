// Polymorphism
console.log('========== Polymophisms ==============');

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}

function Circle() {}

extend(Circle, Shape);
Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('Duplicate Circle');
}
//Define a constructor.
function Square() {}
// Like Circle, lets extend Square.
extend(Square, Shape);
//Redefine Duplicated Method on the Square Object.
Square.prototype.duplicate = function () {
    //Shape.prototype.duplicate.call(this);
    console.log('Duplicate Square');
}
// Each object will drive a different implementation of the duplicate method;

const shapes = [
    new Circle(),
    new Square(),
];

for (let shape of shapes) {
    shape.duplicate();
    // Now the poly.... if the shape is Circle or Square, an 
    //  different implementation if duplicate method will be apply
}
