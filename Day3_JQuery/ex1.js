// What element(s) will this selection fetch?
//
// Write in, in plain english, what element(s) will match
//
// For example:
//
// $("p");
// // All paragraphs
//
// We'll go through them together to check our answers

$("h1");
//All <h1> tagged elements

$("#container");
//all elements with id = container

$(":input");
//Select all elements that expect an input from the user.


$(".basic :input");
//All elements that expect an input from the user and which are under the element with class name "basic"


$("div:last");
//last div in the body - in this case div with class footer


$(".footer");
//element with class "footer"


$("td:nth-child(3)");
//third column of the table

$("tr:odd td");
//all columns in the odd rows


$("#user-registration h2");
//all elements h2 under element with id "user-registration"


$("input[name='email']");
//input field withe attribute name = email


$("select option[value='blue']");
//select option with value - blue

// gear shift


$("input", "fieldset");
//all input fields inside fieldset. Second selector is context selector.
// Same as $(fieldset input). But the former is optimized.


$("p", ".footer");
//all paragraphs inside element with class name 'footer


var $form = $("form"); //$ is not required
$form.find("fieldset");
//returns all the fieldset elements within form.


var inputs = $("input");
inputs.filter("[type='text']");
//all text input fields


$("fieldset.basic").filter("h2");
//will return an empty list as there are no fieldset with h2

