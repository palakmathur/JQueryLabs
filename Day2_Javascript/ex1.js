var me = (function () {

    var name = "Palak";
    var trophies = ["Tropy1", "Troph2"];

    return {

        name: name,
        address: "Plano",
        speak: function (str) {
            console.log(this.name + " says " + str);
        },

        getTrophy: function (i) {
            return trophies[i]
        },

        whoIsThis: function () {
            console.log(this); //me object
            var test = function () {
                console.log(this); //Window object
            }();
        }
    }



})();






console.log(me.speak("Kya baat hai!"));
console.log(me.getTrophy(0));



//scope
console.log(this);
console.log(Window.Location)
console.log(me.whoIsThis());
