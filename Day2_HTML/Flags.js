// You can use:
//     getElementById
//     getElementsByTagName
//     getElementsByClassName
//     querySelector
//     querySlectorAll
// and all the parent, child and sibling selectors

// get flag 1
// stored in the first ul, second li
var flag1 = document.getElementsByTagName('li')[1];
//console.log(flag1);

// get flag 2
// stored in the first article, last p, the a
var flag2 = document.getElementsByClassName('flag')[0];
//console.log(flag2);

// get flag 3
// stored in the last div p
var flag3 = document.querySelector('.footer').childNodes[1].childNodes[1].childNodes[3].childNodes[1];
//console.log(flag3);

// bonus: write a function to crawl the entire document and search for the "FLAG" text, and do the job for you.


var container = document.getElementById("container");

console.log(container);

var childOfContainer = container.childNodes;

//console.log(childOfContainer);

var lengthOfChildOfContainer = childOfContainer.length;

var re = /[fF][lL][aA][gG]*/;

console.log(typeof container);

//console.log(re.match(new String(container)));


for(var i = 0; i < lengthOfChildOfContainer; i++){

   // console.log(childOfContainer[i].textContent);




}

//var a = childOfContainer.childNodes

//console.log(childOfContainer.childNodes);
