// let p = document.querySelector("p");

// p.addEventListener("click" , function() {

//     console.log("para was clicked");
// });

// let box = document.querySelector(".box"); 
// box.addEventListener("mouseenter", function() {

// console.log("mouse index box");

// });


let btn = document.querySelector("button");
let p = document.querySelector("p");
let h1= document.querySelector("h1");
let h3 = document.querySelector("h3");

  



function changecolor() {
    console.dir(this.innerText);
    this.style.backgroundColor = "black";
    


   
}

btn.addEventListener("click", changecolor);

p.addEventListener("click", changecolor);
h1.addEventListener("click", changecolor);
h3.addEventListener("click", changecolor);




