let jokes = JSON.parse(localStorage.getItem('Jokes'));
let quote = document.querySelector('#quote');
let heart = document.querySelector('.heart');

var toggle = true;
ID = 0;
let savedFavourites;

function getFavourites() { 
    if (JSON.parse(localStorage.getItem('Favourites'))){
        savedFavourites = JSON.parse(localStorage.getItem('Favourites'));
    } else {
        savedFavourites = [];
    };
};

function displayJoke() {
    quote.innerHTML = jokes[ID].joke;

    for (i = 0; i < savedFavourites.length; i++) {
        if (jokes[ID].id == savedFavourites[i].id) {
            heart.src  = "./images/heart red.svg";
            toggle = false;
        }
    }
}

function nextJoke() {
    ID++;
    toggle = true;
    favourites.src = "./images/heart.svg";
    displayJoke();

    if (ID == jokes.length - 1) {
        getJokes();
        ID = 0;
    }
  };

function fillHeart() {

    if (toggle === true) {
        heart.src  = "./images/heart red.svg";
        addToFavourites();
    } else {
       heart.src = "./images/heart.svg";
       removeFromFavourites();
    }

    toggle = !toggle; 
}

function addToFavourites() {
    
    savedFavourites.push(jokes[ID])
    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}

function removeFromFavourites() {

    for (i = 0; i < savedFavourites.length; i++) {
        if (jokes[ID].id == savedFavourites[i].id) {
            savedFavourites.splice(i, 1);
        }
    }

    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}

getFavourites();
displayJoke();
console.log(jokes)