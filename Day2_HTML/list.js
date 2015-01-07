//get the mainlist


mainlist = document.querySelector(".mainlist");//document.getElementsByClassName("mainlist")[0];

console.log(mainlist);

mainlist.addEventListener("click", function(event){

         event.target.style.color = "Red";
         event.target.style.fontFamily = "Verdana";

     // console.log(event.target.style);
     }
);


//add an event hadnler to it
