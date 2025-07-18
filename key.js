// let btn = document.querySelector("button");


// btn.addEventListener("click", function(event){
//  console.log(event);
//  console.log("button clicked");


// });
// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("button clicked");
   
   
//    });
let inp = document.querySelector("input");

inp.addEventListener("keydown", function(event) {

  console.log( "code = ",event.code);
  if (event.code  == "keyU") {
 console.log("character moves up");
  }

  else if (event.code == "keyD") {
 console.log("character moves backward");
  }

  else if (event.code == "keyL") {
 console.log("character moves left");
}

else if (event.code == "keyR") {
  console.log("character moves right");
}


});



// inp.addEventListener("keyup", function() {
  
//     console.log("key was released");

// });

