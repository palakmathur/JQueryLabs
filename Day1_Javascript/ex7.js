/**
 * String manipulation
 *
 * Create a function that takes a string and performs some operations on it.
 * The function should:
 * 1) Replace the word "today" with the current Date (format: YYYY-MM-DD)
 * 2) Replace the word "pi" with the numeric value of PI, to the 2nd decimal place
 * 3) Count how many occurrences of the letter X there are and output the count to the console
 * It then returns the modified string
 *
 */

function stringManipulation(str){

 var months = ["January", "February", "March",
"April", "May", "June", "July", "August", "September",
"October", "November", "December"];

  var date = new Date();
  currentDate = date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate();


  str = str.replace("Today", currentDate);

  str = str.replace("Pi", new String(Math.PI.toFixed(2)));

  var re = /X*/ ;///[X]*/;///[X*]/;
  var re2 = /c*/;///[c]/;

  var arrOfRe = re.exec(str);
  var arrOfRe2 = re2.exec(str);

  console.log(arrOfRe);
  console.log(arrOfRe2);

  console.log("No. of Xs:" + arrOfRe.length );

  console.log("No. of cs:" + arrOfRe2.length );

  return str;
}

console.log(stringManipulation("Today is Monday. Pi is great. Christmas can be written as X. XYZ is an anonymous X function. ccccc"));
