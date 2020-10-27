console.log('============Functions are Objects==============');

function Circle(radius) {
    this.radius = radius;
    this.draw = function() {
        console.log('Draw');
    }
}
//The purple are methods and the blue ones are propertys

const another = new Circle(1);
console.log(another.constructor);
