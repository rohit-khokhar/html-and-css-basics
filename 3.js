let btns = document.querySelectorAll("button");
// console.dir(btn);

// btn.onclick = function () {
//     console.log("button was clicked");
//     alert("button was clicked");
// };
     for(btn of btns)  { 
        // btn.onclick= sayHello ;
        // btn.onmouseenter = function ()
        //  {  
            // btn.addEventListener("click", sayHello);
            // btn.addEventListener("click", sayName);            
            btn.addEventListener("dblclick", function() {
                console.log("u click me");
            });

        }
        // console.dir(btn);
     
 


function sayHello() {
    alert("hello!");
}


function sayName() {
    alert("apna clg!");
}