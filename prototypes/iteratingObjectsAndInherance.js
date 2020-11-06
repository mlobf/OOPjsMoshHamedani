function Circle(radius) {
    // Instance members
    this.move = function () {
        console.log('move');
    };
}

const c1 = new Circle(1);

//Prototype members
Circle.prototype.draw = function () {
    console.log('draw');
};
//Returns only instance members
console.log(Object.keys(c1));

//Returns all members. Instance and Prototypes.
for (let key in c1) console.log(key);
// Now a new lesson.
Array.prototype.shuffle = function(){
   //.. 
};

const array = [];
array.shuffle();

// You should not modify the building Objects in Javascript.
//      and the reason is.... Maybe um the future , you will you a 
//      library whom has his own method .shuffle's arrays.
// So the great lesson is ..... Don't modify Objects that you don't own.










