 // Declare a variable "myArray" and reference an array of 3 values (colors?)

			var myArray = ["red", "blue", "green"];

			// Declare a variable "me" and reference an object with 2 properties, "name", which is your name, and "toString", which is a function that returns the name value.

			var me = {
				name: "Palak",
				toString: function() {
				  return this.name;
			  }
			};

		    


			// Create a function that returns either "elf" or "dwarf", based on a random number
			// If less than 0.5, return "elf"
			// If more than or equal to 0.5, return "dwarf"

			function elfordwarf(){
			   // var value;
				return (Math.random() < 0.5) ? "elf" :  "dwarf";
				//Math.rand() < 0.5 ? value= "elf" : value = "dwarf";
				//return value;
			}

			console.log(elfordwarf());


			// Create a function that iterates over your array from above, logging each value to the console

			for(var i in myArray){
				console.log(myArray[i]);
			}

			/*for(var i=0;i<myArray.length;i++){
			  console.log(myArray[i]);
			}*/

			// Create a new object, "you", that uses "me", your object from above, as its prototype
			/*var you = function(name){
			  this.name = name;
			}*/
			you = Object.create(me);

			// "call" your "toString" function from "me" object in the context of "you"
			console.log(you.toString());



