//Lets some exercises .... 
console.log('----------------- Lesson 41/42 Exercise 1 --------------------');


// The constructor function
function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    };
}
//The parent object
HtmlElement.prototype.focus = function () {
    console.log('focued');
}

// Another constructor
function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(items);
    }


    this.removeItems = function (items) {
        this.items.splice(this.items.indexOf(item), 1);
    }

    this.render = function () {
        return `
    <select>${this.items.map(item => `
    <option>${item}</option>`).join('')}
    </select>`;
    }
}



//Setting the prototype of HtmlSelectElement to a instance of HtmlElement object
HtmlSelectElement.prototype = new HtmlElement();

console.log('----------------- Lesson 43/44 Exercise 2 --------------------');

// Extend the HtmlSelectElement and Implement a Random Method.
// This is an polymorphic exercise.








function HtmlImageElement(src) {
    this.src = src;

    this.render = function () {
        return ` < img src = "${this.src}" / > `;
    }

}
HtmlImageElement.prototype = new HtmlElement();
HtmlImageElement.prototype.constructor = HtmlImageElement;
