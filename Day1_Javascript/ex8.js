/**
 * Grid Builder
 * Create a function "gridify" that accepts an array of similar objects
 * It will output a "table" in the console
 * The header row will be the property names and should display ONCE
 * The body rows will be the property values
 *
 * Hint: use tabs to align, "/t" is the tab character
 *
 */

/* your code here */

gridify([
    {name: "Ryan", value: 913},
    {name: "Jimmy", value: 20003},
    {name: "Donna", value: 923}
]);

/*
ex output:
Name      Value
Ryan      913
Jimmy     20003
Donna     923
*/

function gridify(arr){
   row = "";
   header = "";

  for (var i=0;i<arr.length;i++){
    row = ""
    for (var propName in arr[i]){

    if(i === 0){
       header += propName + "\t";
    }

      row += arr[i][propName] + "\t";

    }
    if(i===0){
      console.log(header);

    }
    console.log(row);

  }

}
