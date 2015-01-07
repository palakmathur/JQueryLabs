// Step by step setup
// 1. JS: Create a module for your app
//        ! Don't forget the Dependencies array


var myApp = angular.module("myApp", []); //[] is for the module dependencies


// 2. HTML: Link the module to your app space (ng-app)
// 3. JS: Create a controller function in the module

myApp.controller('MainCtrl', function() {

    this.name = "Palak";


});



// 4. HTML: Link your controller to a portion of markup (ng-controller)
//        ? Are you using $Scope or Controller As syntax?

// Have at it!
