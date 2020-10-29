console.log('============Factories==============')

// If your object has behavior
// the soluctions is use Factor or Construction Function.

//Factory Function.
function createCircle(radius){
    return {
        radius,
        draw: function() {
            console.log('draw');
        }
    };
}

const circle = createCircle(1);



circle.draw();


/*
const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();


const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function () {
        console.log('draw');
    }
};

circle.draw();
*/

cosdfsnst circle = 0;

