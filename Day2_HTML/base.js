// most useful straight up DOM selector
// get an element by ids id
// remember, ids are unique!
var containerEl = document.getElementById("container");

console.log(containerEl);
console.log("Container fetched by id is", Object.getPrototypeOf(containerEl));

// lets get a set of matching elements
// by their element type (tag name)
var ulElement = document.getElementsByTagName("ul");

console.log(ulElement);
console.log("UL fetched by tag name is", Object.getPrototypeOf(ulElement));

// or by class name
ulElement = document.getElementsByClassName("listy");

console.log(ulElement);
console.log("UL fetched by class name is", Object.getPrototypeOf(ulElement));

// new in es5 are querySelector and querySelectorAll
// which rely on css style selectors
ulElement = document.querySelector(".listy");

console.log(ulElement);
console.log("UL fetched by query selector is", Object.getPrototypeOf(ulElement));

var liElements = document.querySelectorAll(".listy li");

console.log(liElements);
console.log("LI fetched by query selector all is", Object.getPrototypeOf(liElements));

// I can get elements from a NodeList by using array syntax
if (liElements.length > 0) {
    var firstLi, secondItem;

    firstLi = liElements[0];
    console.log(firstLi);

    // i can also use .item() but it isn't as performant
    secondLi = liElements.item(1);
    console.log(secondLi);
}

// I can loop through elements in a NodeList
// but should avoid accessing properties where possible
var numberOfListItems = liElements.length;
for (var i=0; i<numberOfListItems; i++) {
     // liElements[i];
}
