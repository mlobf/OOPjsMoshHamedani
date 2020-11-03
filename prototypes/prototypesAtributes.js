// lets find out.
// Except root prototype has parent object.

let person = {
    name: 'Mosh'
};

console.log('======= beg  ========')

Object.defineProperty(person, 'name', {
    writable: false,
    enumerable: true
});

person.name = "John";

console.log('======= Was setted to John but shows Mosh instead  ========');
console.log(person.name);



let objectBase = Object.getPrototypeOf(person);
let descriptor = Object.getOwnPropertyDescriptor(objectBase, 'toString');
console.log(descriptor);


console.log('======= This is Upper to know ========')



console.log(objectBase);

console.log(person);

for (let key in person)
    console.log(key);

console.log(Object.keys(person));



console.log('======= end  ========')