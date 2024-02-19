const jokeContainer = document.querySelector("#joke"); 
const btn = document.querySelector("#btn"); 
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single";

const getJoke = async () => { 
    jokeContainer.classList.remove("fade");
    let result = await fetch(url); 
    let response = await result.json().then(
        item => {

            jokeContainer.textContent = `${item.joke}`;
            jokeContainer.classList.add("fade");
        }
    )

}
btn.addEventListener("click", getJoke);
getJoke();

