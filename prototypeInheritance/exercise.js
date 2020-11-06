//Lets some exercises .... 
console.log('----------------- Lesson 41/42 Exercise 1 --------------------');

function HtmlElement() {
    this.click = function () {
        console.log('clicked');
    }
}

HtmlElement.prototype.focus = function () {
    console.log('focued');
}

function HtmlSelectElement(items = []) {
    this.items = items;

    this.addItem = function (item) {
        this.items.push(items);
    }
}

this.removeItems = function (items) {
    this.items.splice(this.items.indexOf(item), 1);
}

HtmlSelectElement.prototype = new HtmlElement();





console.log('----------------- Lesson 43/44 Exercise 2 --------------------');