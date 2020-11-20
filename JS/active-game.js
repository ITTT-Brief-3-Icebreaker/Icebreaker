let jokes = JSON.parse(localStorage.getItem('Jokes'));
let quote = document.querySelector('#quote');
var toggle = true;
let savedFavourites = []

ID = 0;

function displayJoke() {
    quote.innerHTML = jokes[ID].joke;
}

function nextJoke() {
    ID++;
    toggle = true;
    favourites.src = "./images/heart.svg";
    displayJoke()

    if (ID == jokes.length - 1) {
        getJokes()
        ID = 0;
    }
  };

displayJoke();

function fillHeart() {
    if (toggle === true) {
        favourites.src  = "./images/heart red.svg";
        addToFavourites();
    } else {
       favourites.src = "./images/heart.svg";
       removeFromFavourites();
    }
    toggle = !toggle; 
    console.log(toggle)
}


function addToFavourites() {
    console.log("added")
    savedFavourites.push(jokes[ID])
    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}

function removeFromFavourites() {
    console.log("removed")
    for (i = 0; i < savedFavourites.length; i++) {
        if (jokes[ID].id == savedFavourites[i].id) {
            // savedFavourites[i]
            savedFavourites.splice(i, 1);
        }
    }
    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}