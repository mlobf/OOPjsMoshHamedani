// StaticMethod
// In OOP we have Instances Methods and Static Methods- That are available in Class it self.

class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    //Instance Method
    draw() {
        console.log('Lets draw!!')
    }


    //Static Method, to create utilities functions that are not tied into a particular object;
    static parse(str) {
        const radius = JSON.parse(str).radius;
        return new Circle(radius);
        
}

//const circle = new Circle(1);
//console.log(circle);


// Another example of static method

class Math2 {
    static abc (value) {
        //...
    }
}
