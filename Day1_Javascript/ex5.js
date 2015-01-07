// 1)
// Create a function that accepts an object as an argument
// and returns a copy of that object
// So that the following example will run w/out spitting out "Nope"
var joe = {
    name: "Joe",
    age: 32
    copy:  function(){
       var newObj = {};

       var ownProperties = Object.getOwnPropertyNames(this)
         console.log(ownProperties);

       for (index in ownProperties){
          newObj[ownProperties[index]] = obj[ownProperties[index]];
       }

       return newObj;

    }
}

function copy(obj) {

    //var newObj = Object.create(obj);

    var newObj = {};

     var ownProperties = Object.getOwnPropertyNames(obj)
     console.log(ownProperties);

    for (index in ownProperties){
      newObj[ownProperties[index]] = obj[ownProperties[index]];
    }

  return newObj;

}

var jim = copy(joe);

if (jim === joe) {
    console.log("Nope! They are the same object")
}

console.log("check your copying:", jim, joe);

// 2)
//
// Make sure the function ONLY copies "own" properties
// hint: use hasOwnProperty()

jim.hasOwnProperty("name");
jim.hasOwnProperty("age");

// 3) Bonus
//
// Add the function as a method on an object,
// then invoke the method of that object to copy it
// hint: you will use "this" keyword in your method
//
// ex: myObject.copy(); // outputs a copy


//Check above


// 4) Ultra bonus
//
// Make it so that ALL objects inherit this "copy" method
// hint: you will extend Object.prototype

Object.prototype.copy = function (){
     var newObj = {};

     var ownProperties = Object.getOwnPropertyNames(this)
     console.log(ownProperties);

     for (index in ownProperties){
      newObj[ownProperties[index]] = obj[ownProperties[index]];
     }

  return newObj;
}
