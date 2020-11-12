// Exercises 
// Implement a stack using es6
// Stack is like a pile, think in a burguer, a double burguer!!
// A Stack has two essencial operations.
// Push for add an object,
// Pop to remove a object of top this box.
// Create a Stack here 
const _items = new WeakMap();

class Stack {
    constructor() {
        _items.set(this, []);

    }

    push(obj) {
        _items.get(this).push(obj);
    }

    pop() {
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty.');

        return items.pop();
    }

    peek() {
        const items = _items.get(this);
        if (items.length === 0)
            throw new Error('Stack is empty');

        return items[items.length - 1];
    }

    get count() {
        return _items.get(this).length;
    }

}