
  let btn = document.querySelector("button");
  let url2 = "https://dog.ceo/api/breeds/image/random";



  btn.addEventListener("click" , async () => {
    let link =  await getImg();
    console.log(link);
    let img = document.querySelector("#result");
//     p.innerText = fact;
 img.setAttribute("src", link);
//    
  });
    //  let url = "https://catfact.ninja/fact";
// let url2 = "https://dog.ceo/api/breeds/image/random";


async function getImg() {
    try {
        let res =  await axios.get(url2);
        return res.data.message;
    // return res.data.fact;

    }  catch(e) {
        console .log("error - ", e);

        return "NO  Image found " ;
    
} 























}