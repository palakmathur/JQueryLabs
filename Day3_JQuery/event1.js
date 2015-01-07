// Form Events with jQuery

// Part 1
// Submission
//
// When a new issue is submitted
// a.  Add a new "issue" element to the #issues div
//     You can add this as a list/list-item
//     Or as a table row (you'll need to set up the table)
// b.  Empty out the form after submission

$().ready(function () {

$("#myForm").on('submit', function() {

        //console.log($(this).serializeArray());

         //var array = $(this).serializeArray();

     var value = $("input[name='issue']").val();

     if(validate(value) == true){

        if(value.search("urgent")){

            $(":input.priority").val("1");
        }
        //alert("success");
        var $newIssue = $("<h3>" + value + "</h3>");

        $newIssue.appendTo($("div#issues"));

        $("div#issues").show();
       // $("input[name='issue']").val(" ");

         $(this).trigger("reset");

        return false;
     }
    });



// Part 2
// Validation
//
// Using jQuery/JavaScript
// Add some basic validation rules to the form
// a.  Description field is required
// b.  When the user submits the form validation should be checked
// c.  When invalid, display a message to the user somewhere in the page, ex: "Description is required, try again!"
// d.  Bonus: Add a style to fields so that they have a red border when invalid

function validate(value){
    //alert(value.length)
    if(!value){// value.length === 0 || value === " "){
        //alert("empty");
        $(".help-block").append($("<br>Description is required, try again!</br>"));
        return false;
    }
    return true;
};


// Part 3
// Being nice to users
//
// If a user types in the word "urgent" to the description
// Then the form should auto-select a priority of "medium"
// And the background of the form should be set to a "lightred"




// Part 4
// Being nice to the boss
//
// If a user checks "are you my boss?"
// Then the form should auto-select a priority of "high"
// and set the class of the form container to "boss-level"



});
