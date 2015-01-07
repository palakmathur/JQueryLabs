// Selector Matching
//
// Use jQuery to select the element
// confirm your match by setting the background
// on the element
//
// You can use this pattern to set the color:
// $("selector").css("backgroundColor", "red");
//

// 1) the container div
//$(insert your selector).css("backgroundColor", "red");


$("div").css("backgroundColor", "red");

// 2) the heading (h1)

$("h1").css("backgroundColor", "blue");

// 3) the form


$("#user-registration").css("backgroundColor", "white");

// 4) all hidden inputs
//$(insert your selector).attr('type', 'text').css("backgroundColor", "red");

//console.log($("input").attr('type','hidden'));

//console.log($("input[type='hidden']"));

marker = $('<span />').insertBefore("input[type='hidden']")
$("input[type='hidden']").detach().attr('type','text').insertAfter(marker);
marker.remove();

//or $(":input[type='hidden'")

// 5) all fieldsets
//$("fieldset").css("backgroundColor", "yellow")


// 6) Just the first fieldset

//$("fieldset:first").css("backgroundColor", "yellow
$("form fieldset:nth-of-type(1)");

// 7) the username input field

$("input[name='username']").css("backgroundColor", "black")

// 8) the email input field

$("input[name='email']").css("backgroundColor", "black")

// 9) the second fieldset only

$("fieldset:nth-child(3)").css("backgroundColor", "yellow")
//$("fieldset:eq(2)") or $(fieldset).eq(2)

// 10) all input fields
//$("input").css("backgroundColor", "black")



// 11) all inputs in the second fieldset

$("fieldset:nth-child(3) input").css("backgroundColor", "yellow")

// or $("fieldset:eq(2) :input");

$("fieldset").eq(2).find(":input");

// 12) all paragraphs in the footer

$(".footer p").css("backgroundColor", "blue");

// 13) the table header row
//console.log($("thead"))

$("thead th").css("backgroundColor", "blue") ; //$("thead tr")

// 14) the first cell in the first row of the table body

$("tbody tr:first td:first").css("backgroundColor", "yellow")
//or  $("tbody td:first").css("backgroundColor", "yellow")

// 15) the third cell in the second row of the table
//$("tbody tr:nth-child(2) td:nth-child(3)").css("backgroundColor", "yellow")
//or  $("tbody td:first").css("backgroundColor", "yellow")

// 16) the second column in the table (hint:you will use "nth-child()")

$("tbody td:nth-child(2)").css("backgroundColor", "blue")

// 17) all odd rows in the table
//console.log($("tbody tr:nth-child(odd)"));

$("tbody tr:nth-child(odd) td").css("backgroundColor", "red") ; //selects fine but doesn't changes the color
//$("tbody tr:odd td").css("backgroundColor", "red")

// 18) all unordered lists within an unordered list
$("ul ul").css("backgroundColor", "blue")

// 19) only paragraphs that are a direct child of the footer div
//console.log($("div.footer > p"));
$(".footer > p").css("backgroundColor", "yellow")

// 20) the last list item of the inner unordered list ("My Info")
console.log($("ul li ul li:nth-child(2)"));
$("ul li ul li:nth-child(2)").css("backgroundColor", "yellow")
//$("ul li:last")

// Bonus) All empty paragraphs (Hint: You'll need to set the height on the paragraph, too)
//$("p:empty").css("height", "10px").css("backgroundColor", "Red");

$("p:empty").css({
  height: "10px",
  backgroundColor: "Red"
}
