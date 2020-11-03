console.log('============Constructor==============');

function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('draw');
    }
}

const another = new Circle(1);//Create an empty object.
// Throught it, no need to return as will be make automatically.
another.draw();




