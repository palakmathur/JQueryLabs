/**
 * Month names function
 *
 * Using a closure, write a function that will
 * return the Month name for a given number (1-12).
 *
 * Hint: Your function will include an array of month names
 * Hint: It will return a function
 *
 */

/**
 * Bonus:
 *
 * Set a timer to run your function 12 times, once each second
 * It should use the increment of a loop to log the month name
 * that maps to the integer value
 *
 * Example output, one line per second:
 * "January"
 * "February"
 * "March"
 * ...
 *
 * Hint: You'll use setTimeout(function, i*1000);
 * Hint: You'll need an additional scope to pass "i" correctly
 * in to the timer function
 */

var returnMonthName = (function(){

     var monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

      return function returnMonthNameFn(number){

         return monthNames[number-1];
     }

    //return returnMonthNameFn;

}());

for(var i=1; i <= 12; i++){ //let didnt work with LightTable

  (function test(i){

    setTimeout(function(){

      console.log(returnMonthName(i));
    },i*1000 );

 }(i));
}

console.log(returnMonthName(2));
