// Content manipulation
//
// Use jQuery to complete the following
// You will be adding, moving, and manipulating content
//
// Warnings:
// a. Be sure to write your code so it runs on document ready only
// b. Take care not to REMOVE classes or attributes unless
// told to do so in each task below

// 1
//     Create a new "Grapes" list item in the "new" list
//     Give it a class of "fresh" and "glyph-grapes"
//     Style it with white text and a purple background

$().ready(function () {

  function sort() {

     // $(".new").append("<li>Grapes</li>").addClass("fresh glyph-grapes");
    var $newLi = $("<li>Grapes</li>");

    $newLi.addClass("fresh glyph-grapes")
          .css({
                  backgroundColor : "purple",
                  fontColor: "white"
              })
          .appendTo($(".new"));

    /* $(".new").append("<li class='fresh glyph-grapes'>Grapes</li>")
              .css({
                  backgroundColor : "purple",
                  fontColor: "white"
              });
*/






// 2
//     Remove any "spoiled" list items from the page entirely

   // $(".spoiled").detach();
    $("li.spoiled").remove();


// 3
//     Move "Cherries" into the "new" list as the last item
//     Add text to the list item, "(10)" to indicate you have ten cherries.
//    Resulting text: "Cherries (10)"

    var $cherry = $(".glyph-cherry");

    $(".new").append($cherry);
    /*$cherry.html(
         $cherries.html() + "(10)"
    );
    var cherryTxt = $cherry.text() + "(10)";
    $cherry.text(cherryTxt);*/

    $cherry.append("(10)");

// 4
//     Copy "Apples" into the "new" list as the first item
//     Set it's data-type attribute value from "red" to "green"
//     Remove the class "mushy" and give it a class of "fresh"

    var $apples = $(".glyph-apple").clone()
                                   .removeClass("mushy")
                                   .addClass("fresh")
                                   .attr("data-type", "green")
                                   .prependTo($(".new"));
   // $(".new").prepend($apples);


// 5
//    Bring it together
//    Write a function, "sort()" that will perform all
//    the manipulations you wrote above
//    To test, uncomment the sort() invokation line
//    then press the sort button

  }

$("#sorter").one('click', function() { //invokes eventhanlder once
   //<!-- uncomment me when you have written sort()
   $(".old").fadeOut(1000, function() {
         sort();
         $(this).remove();
    });
});

// 6 (Bonus)
//    Animate your manipulations
//    Update your sort() function so that:
//    For any element that is removed from the page, fade it out
//    For any element that is added to the page, fade it in
//    For any element that is moved in the page, fade it out before moving, then fade it in once moved



});

