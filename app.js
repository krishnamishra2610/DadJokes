
const jokeEl = document.getElementById("joke");
const get_joke = document.getElementById("get_joke");

const msg = document.getElementsByClassName("resp-sharing-button__link");



get_joke.addEventListener("click", generateJoke);

generateJoke();

async function generateJoke(){
    //call the API
    const jokeRes = await fetch("https://icanhazdadjoke.com/",{
        headers: {
            "Accept": "application/json"
        }
    });
   
   const joke = await jokeRes.json();

   console.log(joke);
    //set the new joke

    jokeEl.innerHTML = joke.joke;
}
const share = document.getElementById("share");
const sharejoke = document.querySelector("#share-btn");

sharejoke.addEventListener("click", ()=>{
     
    
    share.classList.toggle("show");
    document.getElementById("msg").setAttribute("href","whatsapp://send?text= " + jokeEl.innerHTML);
    document.getElementById("msg1").setAttribute("href","https://twitter.com/intent/tweet/?text=  " + jokeEl.innerHTML);
    document.getElementById("msg2").setAttribute("href","https://telegram.me/share/url?text=   " + jokeEl.innerHTML);

    
    

})
