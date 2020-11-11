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
const _radius = new WeakMap(); // Using WeakMap this varible will be collected by Garbage Collector
const _move = new WeakMap(); // Using WeakMap this varible will be collected by Garbage Collector

class Circle {
    constructor(radius) {
        _radius.set(this, radius);
        _move.set(this,function(){
            console.log('move', this);
        });
    }

    draw() {
        console.log(_radius.get(this));
    }
}


const c = new Circle(1);

console.log(c.draw());