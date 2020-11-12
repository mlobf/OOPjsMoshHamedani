// JS is Getting hot as sunSet......kkkkkk

const _radius = new WeakMap();

class Circle {
    constructor(radius) {
        _radius.set(this, radius); // The private property
    }

    get radius() {
        return _radius.get(this); // Looks like a method but can be acesse like a property
    }

    set radius(value) {
        if (value <= 0) throw new Error('invalid radius');
        _radius.set(this, value);
    }
}

const c = new Circle(1);