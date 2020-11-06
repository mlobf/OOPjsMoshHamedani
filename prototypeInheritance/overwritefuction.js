//Means re implementing an method in a Child Object.
console.log('========== Overwriting Methods ==============');

function extend(Child, Parent) {
    Child.prototype = Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}

function Shape() {

}

Shape.prototype.duplicate = function () {
    console.log('duplicate');
}; 

function Circle() {}

extend(Circle, Shape);

Circle.prototype.duplicate = function () {
    Shape.prototype.duplicate.call(this);
    console.log('Duplicate Circle');
}; 

const c = new Circle();
