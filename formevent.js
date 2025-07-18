let inp = document.querySelector("#text");

let p =  document.querySelector("p");
  



inp.addEventListener("input" , function() {
 console.log(inp.value);
    p.innerText = inp.value;
});

//  console.dir(form);

//  let user = this.elements[0];
//  let pass = this.elements[1];


//  console.dir(user.value);
//  console.log(pass.value);

//    alert(`hi! ${user.value}, your password is set to ${pass.value}`);

// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function(){
//     console.log(" change event");
//     console.log("final value = ", this.value);

// });


// user.addEventListener("input", function(){
//     console.log("input event");
//     console.log("final value = ", this.value);

// });
