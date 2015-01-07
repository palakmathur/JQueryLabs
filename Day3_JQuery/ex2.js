// Advanced selectors
// And Modifying selections
//
// This exercise is intended to give you
// a feel for using modifiers on selections
// as well as the context selector
//
// Follow the instructions below to select each
// element and apply a style change to them
//
// .css("border", "1px solid red");
//

// 1.
// Get the unordered list (ul) that is NOT
// in #container

$("ul").not("#container").css("border", "2px solid blue");


// 2.
// Get the unordered list that has a "span"
// inside it

$("ul").has("span").css("border", "1px solid red");

// 3.
// Get the unordered list that is in #container
// Do so with the "context selector"

$("ul","#container").css("border", "1px solid red");


// 4a.
// Select all inputs and store them in a variable
var $inputs = $(":input");


// 4b.
// Within the input results, filter it for all text inputs
$inputs = $inputs.filter("[type=text]").css("border", "1px solid red");


// 4c.
// Add input types of "date" to your previous selection
$inputs.filter("[type=text]").add("input[type='date']").css("border", "1px solid blue");

// 5a.
// Get all fieldsets (store this for use later)
var $fieldsets = $("fieldset");

// 5b.
// Find all h2 elements inside the fieldset result from 5a

$fieldsets.find("h2").css("border", "1px solid red");

// 5c.
// Write the above as a "context selection" instead
$("h2",$fieldsets).css("border", "2px solid green");

