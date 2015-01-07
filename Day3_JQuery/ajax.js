// Ajax with jQuery
// We will be using this service to fetch data
// This server is friendly enough to be CORS:*
//     http://jsonplaceholder.typicode.com/
// if we have trouble with that, we can do this on
// local servers fetching up static .json data
//

$().ready(function () {

// Part 1
// Make a JSON request to
//     http://jsonplaceholder.typicode.com/todos
// Load the data from here and build a ul/li of TODO items
// Each todo items should display at least its title
// Hint: filter by a userId to limit the data, ?userId=5

/*$.getJSON('http://jsonplaceholder.typicode.com/todos?userId=5', function(response) {

     var $newLi;

   response.forEach(function(item){
      $newLi = $("<li></li>");
             console.log(item);

       $newLi.addClass("toDoItem")
             .attr("id", item.id )
             .html(item.title)
             .appendTo(".toDoList");

   });

});*/

// Part 2
// Completion checkbox
//
// Include a checkbox with each todo item.
// The checkbox should be checked when the item is completed
// And unchecked when the item is not completed

/*$.getJSON('http://jsonplaceholder.typicode.com/todos?userId=5', function(response) {

     var $newLi;
     var $chkbx;

   response.forEach(function(item){
      $newLi = $("<li></li>");

      $chkbx = $("<input type='checkbox' />" + item.title + "</input>");

      $chkbx.attr("id", item.id)
            .attr("value", item.title)
            .appendTo($newLi);

      if(item.completed){
        $chkbx.prop('checked', true);
      }

      $newLi.addClass("toDoItem")
             .attr("id", item.id )
             .appendTo(".toDoList");

     console.log($newLi);

   });

});*/

// Part 3
// Completed items only
//
// Update your REQUEST so that you are only fetching completed items
// Add a handler to the checkbox so that when a user checks the item
// It fades out the todo list item


$.getJSON('http://jsonplaceholder.typicode.com/todos?userId=5', function(response) {

   var $newLi;
   var $chkbx;
   var $vuButton;

   response.forEach(function(item){



      if(!item.completed){
        $newLi = $("<li></li>");
        $chkbx = $("<input type='checkbox' />" + item.title + " </input>");
        $vuButton = $("<input type='button' value='View User'/>" )

        $chkbx.attr("id", item.id)
            .attr("value", item.title)
            .prop('checked', false)
            .appendTo($newLi);



        $vuButton.attr("id", item.id)
                 .appendTo($newLi);

         $newLi.addClass("toDoItem")
             .attr("id", item.id )
             .appendTo(".toDoList");

      }



     //console.log($newLi);



   });

});


$(".container").on(
    "change",
    "ul li",
    function(e){
       // console.log(e.target);
        $(e.target).prop('checked', true);
        $(e.currentTarget).fadeOut();
        putToServer($(e.target).attr("id"), $(e.target).attr("value"));
    }

);

// Part 4
// Telling the server something was completed
//
// When a user completes a todo item
// Send the change to the API via a PUT request
// (Note: try using $.ajax for this, with promises)
//
// Example:
//    PUT to url http://jsonplaceholder.typicode.com/todos/1
//    Data: {id: 1, title: "Title", completed: true}
//
// When the request fails (errors) make sure the todo list item
// is re-displayed to the user and given a RED background
// to indicate a failure
//
// BONUS: Indicate a failure to the user with a message in a modal

  function putToServer(id, title){

       //var data = createData(id, value);

       $.ajax({
           type: "PUT",
           url: "http://jsonplaceholder.typicode.com/todos/" + id,
           data: {
             id: id,
             title: title,
             completed: true
           }

       })
       .done(function(){

           $(".error").html("Success");


       })
       .fail(function(){
          $(".error").html("<p>The item could not be marked complete");
          $newLi = $("<li></li>");
          $chkbx = $("<input type='checkbox' />" + item.title + "</input>");

          $chkbx.attr("id", id)
              .attr("value", title)
              .prop('checked', false)
              .appendTo($newLi);

           $newLi.addClass("toDoItem")
               .attr("id", id )
               .appendTo(".toDoList");

       });

  } //end of putToServer




// Part 5 (BONUS)
// Still going strong?
//
// The ability to view a given user for each todo item
//
// Add a button or link to each todo list item, "View user"
// Clicking this should asynchronously load the given
// USER for that todo item (based on userId).
// The endpoint to fetch user information is:
//    http://jsonplaceholder.typicode.com/users/1
// Display some user information in the page
// I'll leave this part up to you...
// - In a modal
// - in a div right underneath the list item
// - in a div that permanently hovers to the top right of the page
// Make sure you handle when clicking to view a different user, too

  $(".container").on(
    "click",
    "ul li input[type='button']",
    function(e){
        console.log(e.target);
        //$(e.target).prop('checked', true);
        //$(e.currentTarget).fadeOut();
       // viewUser($(e.target).attr("id"), $(e.target).attr("value"));
    }

);


});
