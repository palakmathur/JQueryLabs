 function Car(color) {

    this.color = color;
}

Car.toString = function (){
    return this.color + " car";
}

var toyota = new Car("Silver");

//console.log(toyota.toString());

function Honda (){
    Car.call(this, "red");

}


Honda.prototype = Object.create(Car); //IF I just use Car and not Car.prototype, the methods would not have been inherited

//Honda.prototype.constructor = Honda;

car = new Honda();

//honda.color = "Blue";



console.log(car.toString());
