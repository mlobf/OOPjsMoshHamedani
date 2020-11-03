// the exercise.
console.log("========= Exercise Prototypes ===============");


// Design a stopWatch like this.
// It has thoose methods.
//  ->Duration
//  ->Reset 
//  ->Star
//  ->Stop

function StopWatch() {
    let startTime, endTime, running, duration = 0;


    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration;
        }
    });

    Object.defineProperty(this, 'startTime', {
        get: function () {
            return startTime;
        }
    });

    Object.defineProperty(this, 'endTime', {
        get: function () {
            return endTime;
        }
    });

    Object.defineProperty(this, 'running', {
        get: function () {
            return running;
        }
    });
}

StopWatch.prototype.start = function () {
    if (this.running) //Validation check
        throw new Error('StopWatch already started.');
    this.running = true;
    this.startTime = new Date();
};

StopWatch.prototype.stop = function () {
    if (!this.running)
        throw new Error('Stopwatch is not started.');
    this.running = false;
    this.endTime = new Date();


    const seconds = (this.endTime.getTime() - this.startTime.getTime()) / 1000;
    duration += seconds;
};

StopWatch.prototype.reset = function () {
    this.startTime = null;
    this.endTime = null;
    this.running = false;
    duration = 0;
};


// Premature optimization is the root of all Evils