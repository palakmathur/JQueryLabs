var Profession = {
        name: "Professional",
        work: function(){
            console.log("I am working");
        }
};


var Engineering = Object.create(Profession);
Engineering.name = "Engineer";
Engineering.work = function(){
    console.log("I work as an " + Engineering.name);
}();


var Architect = Object.create(Engineering);
Architect.name = "Architect";
Architect.work = function(){

    console.log("I work as an " + Architect.name);
};




Architect.work();
