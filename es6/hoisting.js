// Hoisting, 
// Function Declaration, are hoisted. 
// 
function sayHello(){}

// Function Expression there an obligation to put them on the top.
const sayGoodbye = function(){};


// Now the same example using classes.
// Unlike function, classes are not hoisted

// Class Declaration
// Use this method
class Circle {
}
// Class Expression
// Dont use this method
const Square = class {
};

