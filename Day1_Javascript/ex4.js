//Create new functions that share a non-global scope

function NonGlobalEx(){

     var y = 0;

    f1();
    f2();

     function f1(){
        this.y = 5;
     };

     function f2(){
        this.y = 7;
     };

  console.log(y);

};




