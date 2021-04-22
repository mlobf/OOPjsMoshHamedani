// Lets show the differences between.
// In JS we don't have classes, only objects.
// so how to implement Inheritance in objects?
//

let x = {};
let y = {};

let z = Object.getPrototypeOf(x);

console.log(z);

let result = Object.getPrototypeOf(x) === Object.getPrototypeOf(y);

console.log(result);

//How does JS works?
// First I will looks to  own objects prototypes, if didn't find it, goes upper,
//      climbing parent Classes until find
//      something.

console.log("Protype is just a regular object on memory !!");
