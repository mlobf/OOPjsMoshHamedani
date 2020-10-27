console.log('============Objects Literals==============')

// Its a simple way to define an object.
// Use let or const
// const = constant, cant reassign .
// Otherwise, let.

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    draw: function() {
        console.log('draw');
    }
};

circle.draw();


