// function savetoDb(data,success,failure) {

//     let inernetSpeed = Math.floor(Math.random() * 10) +1;
//     if(inernetSpeed >4) {
//         success();
//     } else{
//         failure();
// }
// }

// savetoDb("apna college" , 
// () => { 
//    console.log("success : your data was saved");
//    savetoDb(
//     "hello world", ()=>{
//     console.log("success2: data2 saved");
//     savetoDb("sonu", () => {
//         console.log("success3: data3 saved");
//     }, () => {
//         console.log("failure3 : your weak connection");
//     })
//    }, () => {
//     console.log("failure2 : your weak connection");
//    })
// },  
// () => {   
//     console.log("failure : your data not saved");
// }
// );

// function savetoDb(data) {
//     return new Promise((resolve, reject) => {
//         let inernetSpeed = Math.floor(Math.random() * 10) +1;
//         if(inernetSpeed >4) {
//             resolve ("success : data was saved");
//         } else{
//             reject ("failure : weak connection");
//     }
//     });
// }
//    savetoDb("apna college")
//         .then((result) => {
//             console.log("data1 saved.");
//             console.log("result of promise:", result);
//          return savetoDb("helo world");
//     })
//         .then ((result) => {
//             console.log("data2 saved.");
//             console.log("result of promise : ", result);
//             return savetoDb("r l");

//        })
        
//        .then ((result)=> {
//         console.log("data3 saved.");
//             console.log("result of promise : ", result);
            
//    })



//       .catch( (error) => {
//         console.log("promise was rejected");
//             console.log("error of promise = ", error);
//       });

h3 = document.querySelector("h3");

function changeColor(color,delay) {

    return new Promise((resolve,reject) => {
setTimeout(() => {
h3.style.color = color;
   resolve("color changed");
},delay);

});
}


changeColor("red",1000)

.then(() =>{
    console.log("red color was completed");
    return changeColor("orange",1000);
})

.then(() =>{
    console.log(" orange color was completed");
    return changeColor("green",1000);
})
     

.then(() =>{
    console.log(" green color was completed");
    return changeColor("blue",1000);
})


.then(() =>{
    console.log(" blue color was completed");

})


