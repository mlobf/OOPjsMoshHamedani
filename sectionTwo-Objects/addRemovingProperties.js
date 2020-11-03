console.log('--------------------------------');
/*
    The objects in JS are dynamic, 
    you can add properties or delete them.
    Why this is usefull?
        A site need a client's token....this new token is a new property.
*/
function Circle(radius) {
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
}

// To add a new property
const circle = new Circle(10);

circle.location = { x: 1};//1 way to do it.
circle['locatium'] = {x: 1};//2 way to do it.
// This second is better when we have special caracters as 
// dfasdfasdf-adsfasdf or spaces between caracters.

// To delete we user .delete

delete circle.locatium;
delete circle['location'];












console.log('--------------------------------');