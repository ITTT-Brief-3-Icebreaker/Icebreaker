let quote = document.querySelector('#quote');
let cardTitle = document.querySelector('#card-title');
let heart = document.querySelector('.heart');

let toggle = true;
let ID = 0;
let jokes, factsArray, savedFavourites, selected;

function getJokesFromLocalStorage() {
    jokes = JSON.parse(localStorage.getItem('Jokes'));
};

function getFactsFromLocalStorage() {
    factsArray = JSON.parse(localStorage.getItem('Facts'));
};

function loadPage() {
    selected = JSON.parse(localStorage.getItem('Clicked'));
    console.log('selected: ' + selected);
    if (selected == 'Jokes') {
        loadJokes();
    } else if (selected == 'Facts') {
        loadFacts();
    }
}

function getFavouriteJokes() { 
    if (JSON.parse(localStorage.getItem('Favourites'))){
        savedFavourites = JSON.parse(localStorage.getItem('Favourites'));
    } else {
        savedFavourites = [];
    };
};

function displayFact() {
    quote.innerHTML = factsArray[ID].question + '<br> <br> A: ' 
                        + factsArray[ID].correct_answer;
}

function displayJoke() {
    // console.log(ID)
    quote.innerHTML = jokes[ID].joke;

    for (i = 0; i < savedFavourites.length; i++) {
        if (jokes[ID].id == savedFavourites[i].id) {
            heart.src  = "./images/heart red.svg";
            toggle = false;
        }
    }
}

function nextFact() {
    ID++;
    displayFact();
}

function nextJoke() {
    ID++;
    toggle = true;
    favourites.src = "./images/heart.svg";
    

    if (ID == jokes.length) {
        const promise = new Promise(function(resolve, reject) {
            getJokes();
            resolve();
        })
            .then(function (result) {
                getJokesFromLocalStorage();
            })
            .then(function() {
                // console.log('new joke')
                displayJoke();
            });
        ID = 0;
    } else {
        displayJoke();
    };
};

function fillHeart() {

    console.log(event.target)

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

function loadJokes() {
    getJokesFromLocalStorage()
    getFavouriteJokes();
    displayJoke();
};

function loadFacts() {
    getFactsFromLocalStorage();
    displayFact();

    // TODO : change title of front card
    cardTitle.innerHTML = 'QUESTION'

    document.querySelector('.jokes-front').style = 'background-color: gray';
    document.querySelector('.jokes-back').style = 'border-color: gray';
};
 

function next() {
    if (selected == 'Jokes') {
        nextJoke();
    } else if (selected == 'Facts') {
        nextFact();
    }
}

loadPage()

// Possible to make only one load function? that recognizes what was clicked and then displays correctly?