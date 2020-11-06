// Values vs References Types
console.log("=============================== Values Vs References Types ========================")

// Value types , called primitives.
//      number, string, boolean, Symbol, undefined, null.
// Reference types, 
//      Objects, Functions, Arrays.
// How they behaviour differently.

let x = 10;
let y = x;//The value is copied;

x = 20;
// X and y are two independent variable.
console.log(x,y);
console.log('--------------------------');
//Now we will use a reference type here.
let z = {value: 10};
let a = z; // The address/reference is copied, not the value.

z.value = 20;
console.log(z,a);

console.log('--------------------------');
// Value or reference type
number = 10;
function increase(number){
    number++;
    console.log(number);
}
increase(number);
console.log(number);

console.log('--------------------------');





























