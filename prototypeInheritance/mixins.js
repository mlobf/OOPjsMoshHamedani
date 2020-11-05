function mixin(target, ...sources) {
    Object.assign(target, ...sources);
}

// Lets Mix some Class....
// Define a new object...
const canEat = {
    eat: function () {
        this.hunger--;
        console.log('Eating');
    }
};
const canWalk = {
    walk: function () {
        console.log('Im going for a walk...');
    }
};

const canSwim = {
    walk: function () {
        console.log('Im going wet....');
    }
};

function Person() {};

mixin(Person.prototype, canEat, canWalk);
const person = new Person();
console.log(person);

function Goldfish() {}
mixin(Goldfish.prototype, canEat, canSwim);

// Now create a Person who can eat and walk...
// Using EA6 way

const person = Object.assign({}, canEat, canWalk);
console.log(person);