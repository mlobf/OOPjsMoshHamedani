console.log('=========== Lesson 17 Getter and Setters ==============');
/*
    This will get Us a definition about getter and settters.
    Getter is a function setted to read a property.
    To define value to this property from outside, shall use a setter.

*/



function Circle(radius) {
    this.radius = radius;

    let defaultLocation = {
        x: 0,
        y: 0
    }; //Private property

    this.getDefaultLocation = function () {
        return defaultLocation;
    };

    this.draw = function () {
        console.log('draw');
    };

    //Use Object.defineProperty to define getter or setters.

    Object.defineProperty(this, 'defaultLocation', {
        get: function () {
            return defaultLocation;
        },
        set: function (value) {
            if (!value.x || !value.y)
                throw new Error('Invalid location');
            defaultLocation = value;
        }
    });
}



const circle = new Circle(10);
circle.draw();
//circle.getDefautLocation();
circle.defaultLocation = 1;