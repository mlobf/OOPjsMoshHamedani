// Lets show the diferences between .
// In JS we dont have classes, only objects.
// so how to implente Inheritance in objects?
//

let x = { };
let y = { };

let z = Object.getPrototypeOf(x);

console.log(z);

let result = Object.getPrototypeOf(x)=== Object.getPrototypeOf(y);

console.log(result);


//How does JS works?
// First will looks to  own objects prototypes, if didnt find it, goes upper, 
//      climbing parent Classes until find 
//      something.

console.log('Protype is just a regular object on memory !!');