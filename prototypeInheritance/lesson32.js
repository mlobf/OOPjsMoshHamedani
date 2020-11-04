function Shape() {
}

Shape.prototype.duplicated = function() {
    console.log('duplicated');
}

function Circle(radius) {
    this.radius =radius;
}

Circle.prototype = Object.create(Shape.prototype);
//Circle.prototype = Object.create(Object.prototype);

Circle.prototype.draw = function(){
    console.log('draw');
}

const s = new Shape();
const c = new Circle(1);
