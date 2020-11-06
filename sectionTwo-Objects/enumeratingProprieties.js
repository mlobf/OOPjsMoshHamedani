console.log('========================= Lesson 14 ==============================');

// To iterate over properties, we use for in loop;

function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    };
}

const circle = new Circle(10);
// Iterate them;
for (let key in circle) {
    if (typeof circle[key] !== 'function')
        console.log(key, circle[key]);
}
// To get all the keys Object
const keys = Object.keys(circle);
console.log(keys);
//To check is object has a specific key.
if ('radius' in circle)
    console.log('Circle has a radius');
