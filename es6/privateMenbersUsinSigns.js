// To implement abstraction we use private properties and methods
//  so we hide some members of the object in order to they don't be 
//  accessible from out side.
// Using symbol

const _radius = Symbol(); // This is a new primitive type available on es6
const _draw = Symbol(); // This is a new primitive type available on es6
// A Symbols is a unique identifier, so every time you create a Symbol it self will have his 
//      own identifier
console.log(Symbol() === Symbol());
//Must be False

class Circle {
    constructor(radius) {
            this[_radius] = radius; // This radius is public by default but now it has as Symbol, private must be.
        }
        [_draw]() { // Making a private method
        }
}

const c = new Circle(1);

const key = Object.getOwnPropertySymbols(c)[0];
console.log(c[key]);

// How to implement private methods and properties on es6
