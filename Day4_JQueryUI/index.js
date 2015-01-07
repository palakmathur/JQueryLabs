$(function() {

    // combine behaviors to make tabs sortable, too
   $('#accordion').accordion();

    // note: ajax content in tab 4
   $('#tabs').tabs();

    $("a.tab1").tooltip({
        //track: true
    });

    $(".button1").position({
      my:"center",
      at:"center",
      of:"#tabs"
    });

});
