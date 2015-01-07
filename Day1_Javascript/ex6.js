/**
 * Reversing an array
 (without Array.reverse())
 *
 * 1)
 * Create a function, reverseArray(arr), that expects a single array as an argument
 * It will return a new array, with all the values in reverse order
 */

function reverseArray(arr){

  if(!Array.isArray(arr)){
	 throw    {
		name: "NotAnArrayException",
		message: "The passed object is not an Array 11"
	 }
  }

   var newArr =[];
   var index1 = 0
   for(var index = arr.length - 1;index>=0; index--){
     newArr[index1] = arr[index];
     index1++;
   }

  return newArr;

}

console.log(reverseArray(["A", "B", "C"]));
// → ["C", "B", "A"];

try{
console.log(reverseArray(1));

}
catch(ex){
   console.log(ex.message);
}
/*
 * 2)
 * Upgrade the reverseArray function so that when you pass a value
 * that is not an array it will throw an exception
 */


//Done above

/*
 * 3) Bonus
 * Create a new function, reverseArrayInPlace(arr)
 * which does the same but does NOT use two arrays during the reversal process.
*/

function reverseArrayInPlace(arr){
  var tmp;
  for(var index = 0; index< arr.length-1; index++){
    tmp = arr[index];
    arr[arr.length - 1] = arr[index];
    arr[index] = tmp;

  }
  return arr;
}

console.log(reverseArray(["A", "B", "C","D"]));
