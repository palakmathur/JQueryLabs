/**
 * Exercise:
 *
 * Get to know your control flow and iteration
 *
 * Work in the console, or use "console.log()" to output to the console from the script
 *
 * these browser based functions can be used
 *     alert("Message string"); // will alert a message to the user
 *     var val = prompt("Question string?"); // will prompt the user for a value 
 *     confirm("Message string"); // will ask the user to confirm with an ok, or cancel
 */

 alert("Hi");
// 1)
// Ask the user for a number
// Tell (alert) the user if it is even or odd.
// (hint: prompt() will always return a string)
  var num = prompt("Please enter a number: ");

// 2)
// Ask the user how old they are
// If they are 70 or older, tell them they look great.
// If they are 18 or younger, tell them they should be in school.
// If they are between those ages, tell them to get a job.

  var age = prompt("How old are you? ");
  if (age >= 70) {
     alert("You look great!");
  }
  else if (age <=18){
	alert("You should be in school");
  }
  else {
	alert("Get a job");
  }
  
 

// 3) 
// We have an array of values
// Use a while() statement to go through each value of the array
// and add 1 to each number (but not strings)
// log the resulting array to the console

var myArray = [1,2,3,"Interlocutor", 4,5,6];

var i = 0;
while(i < myArray.length) {
	if(typeof(myArray[i]) == "number"){
	  myArray[i] += 1;
	}
	i++;
}

console.log(myArray);



// 4)
// Make an array of people's names
// Use a for statement to go through each and combine
// them into a single string separated by commas
// Log the result to the console.
// ex result: "John, Sally, Nick"
   var nameArray = ["Palak", "Lavanya", "Justine", "David"]
   var concatenatedArray = "";
   for (var index in nameArray){
	  concatenatedArray += (concatenatedArray.length > 0 ? "," + nameArray[index] : nameArray[index]);
   }
   console.log(concatenatedArray);