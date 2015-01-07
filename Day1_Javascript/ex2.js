		/**
 * Exercise:
 * Get to know your data types and variables
 *
 * Follow the directions below but feel free to experiment and veer off course.
 * Work in the console, or use "console.log()" to output to the console from the script.
 */

// 1)
// Declare 2 to 5 variables (name them as you like)
// Make at least one string, one number and one boolean. 
// Log the typeof each to the console

  var str = "Palak";
  var number = 3.14;
  var bool = true;
  console.log(typeof(str));
  console.log(typeof(number));
  console.log(typeof(bool));

// 2)
// Declare a new variable that stores the result of a mathematical expression
// You can add/multiply/divice/modulo any set of numbers 
// Log the result to the console

   var result = 5%2;
   console.log(result);

// 3)
// Combine at least three strings together
// Log the result to the console
 
    var concatStrings = "My " + "name " + "is " + "Palak";
	console.log(concatStrings);

// 4)
// Create an array with at least 5 values stored inside
// Log the result to the console

   var myArray = ["USA", "India", "China", "UK", "Canada"]
   console.log(myArray);
   /*for(var i=0; i<myArray.length;i++){
	 console.log(myArray[i]);
   }*/

// 5)
// Add another array to your original array
// Log the result to the console
    
	//myArray[myArray.length + 1] = ["Pakistan", "Finland"];
	//myArray[myArray.length] = "Pakistan";
	//myArray[myArray.length] = "Finland";
	//myArray = myArray + ["Pakistan", "Finland"]
	myArray = myArray.concat(["Pakistan", "Finland"]);
	
	console.log(myArray);

// 6) 
// Create an object literal that represents a person (perhaps you!)
// Define several properties within the object (name, hairColor, age, etc..)
// Define a property that stores an array ("siblings" or "favoriteColors")
// Log the result to the console
// Log ONLY the "name" property (or any single property) to the console
// Change the "name" property to something else, then log the object to the console

    var Person = {
	    name: "Palak",
		hairColor: "Brown",
		age: 31,
		siblings: ["Shalank"]
	};
	console.log(Person);
	console.log(Person.name);
	Person.name = "Don";
	console.log(Person.name);


// 7) Bonus
// Add a function (method) to the previous person object you created to allow it to "speak" to the console.
   Person.speak = function (){
		console.log("speak");
   }
   
    Person.speak();
