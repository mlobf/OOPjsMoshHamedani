// JS is Getting hot as Sun set......kkkkkk

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // The private property
    }

    get radius() {
        return _radius.get(this); // Looks like a method but can be access like a property
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1);
