// Event handling with jQuery
//
// Step 1
//
// Set up event handler(s) for div.item elements so that:
// on mouseover, the "hover" class is added AND the img "src" attribute is logged to the console
// on mouseout, the "hover" class is removed
// on click, the div is hidden (hint: hide())

$().ready(function () {

   /* $("div.item").on(
        'mouseover',
        function(e){
            console.log(e);
            var $target = $(e.target);
            $target.parent().addClass("hover")
            console.log($target.attr("src"));

        }

    );*/

     $("div.item").on(
        'mouseover',
        function(e){
           var divItem = $(this);
            divItem.addClass("hover");
            console.log(divItem.find("img").attr("src"))

        }

    );


// Step 2
//
// All done? Did you delegate?
// If not, set it up so that you are delgating
// event handling to the wrapper div

   /* $("div.wrapper").on(
       'mouseover',
        'div.item',
        function(e){
            console.log(e);
            var $target2 = $(e.currentTarget);
            $target2.addClass("hover");
            console.log($(e.target).attr("src"));
        }

    );*/



       $("div.wrapper").on(
       'mouseout',
        'div.item',
        function(e){
            //.log(e);
            var $target2 = $(e.currentTarget);
            $target2.removeClass("hover");
            //console.log($(e.target).attr("src"));
        }

    );


       $("div.wrapper").on(
       'click',
        'div.item',
        function(e){
           // console.log(e);
            var $target2 = $(e.currentTarget);
            $target2.hide();
            //console.log($(e.target).attr("src"));
        }

    );

});

//target is source of the event
//currentTarget is the handler of the event
//delegateTarget is the delegator (.wrapper in this case)
