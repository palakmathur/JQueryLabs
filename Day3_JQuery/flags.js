// Hunting flags in the Document
//
// Using jQuery
//
// Find the three flags (they have "FLAG" text inside them)
// and move their containing elements into the #bucket
//
// Hint: Expect to use
//     $(selector)
//     .append()
//     .prepend()

// Note: I'm wrapping this in the DOM on-ready event for you
// So that it runs AFTER the page is loaded and ready
$().ready(function () {


    // todo: get FLAG 1
    var $flags = $("li:contains('FLAG #1')");//$("li:eq(1)");

    // todo: get FLAG 2
    $flags = $flags.add($("a.flag"));

    // todo: get FLAG 3
    $flags =  $flags.add($(".footer > div > div div:nth-child(2) div:first"));

    //console.log($flags);

    $("#bucket").append($flags);

    //$flags.appendTo("#bucket");

});

// bonus: write a function to crawl the entire document and search for the "FLAG" text, and do the job for you.
