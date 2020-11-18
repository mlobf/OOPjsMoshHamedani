console.log('=============== Lesson 16 =============');
// Now we have Two main concepts
// 1 = Enclosure;
// 2 = Scope;
//      
function Circle(radius) {
    
    this.radius = radius;

    let defaultLocation = { x:0, y:0};

    this.getDefautLocation = function() {
        //Important - This implementation allows read only mode as enclosure 
        // the scope's methods
        return defaultLocation;// Read only mode of default Location
    }
    // To convert this to a private method.
    //this.computeOptimumLocation = function(factor){
    //    //... 
    //}
    // Now we have a private method
    let  computeOptimumLocation = function(factor) {
        //... 
    }

    this.draw = function() {
        computeOptimumLocation(0.1);
        console.log('draw');
    }

    Object.defineProperties(this, 'defaultLocation', .
        get: function() {
        return defaultLocation;
    })
}

const circle = new Circle(10);
circle.draw();

circle.getDefautLocation();
