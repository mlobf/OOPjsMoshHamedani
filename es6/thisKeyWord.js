// This keyword
// Declaring a constructor function called  Circle

const Circle = function () {
    this.draw = function () {
        console.log(this);
    }
};

const c = new Circle();
//Method Call
c.draw();

//Function Call
const draw = c.draw;
draw();