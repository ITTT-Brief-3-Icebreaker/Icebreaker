let quote = document.querySelector('#quote');
let cardTitle = document.querySelector('#card-title');
let heart = document.querySelector('.heart');

let jokes, game, savedFavourites, selected, color, toggle, nr;
let ID = 0;

let Card = function(nr, type, color, entry) {
    this.nr = nr,
        this.type = type,
        this.color = color,
        this.entry = entry
}

function getFromLocalStorage(key) {
    game = JSON.parse(localStorage.getItem(key));
    console.log(game)
    if (JSON.parse(localStorage.getItem('Favourites')) && localStorage.Favourites.length > 3) {
        savedFavourites = JSON.parse(localStorage.getItem('Favourites'));
        console.log(savedFavourites)
        nr = savedFavourites[savedFavourites.length - 1].nr;
    } else {
        savedFavourites = [];
        nr = 0;
    };
    console.log(nr);
};

function loadPage() {
    toggle = true;
    selected = JSON.parse(localStorage.getItem('Clicked'));
    console.log('selected: ' + selected);
    getFromLocalStorage(selected);
    if (selected == 'Jokes') {
        loadJokes();
    } else if (selected == 'Facts') {
        loadFacts();
    } else if (selected == 'pickUpLines') {
        loadPickUpLines()
    }
}

// function getFavouriteJokes() {
//     if (JSON.parse(localStorage.getItem('Favourites'))) {
//         savedFavourites = JSON.parse(localStorage.getItem('Favourites'));
//     } else {
//         savedFavourites = [];
//     };
// };

function displayFact() {
    quote.innerHTML = game[ID].question + '<br> <br> A: ' +
        game[ID].correct_answer + '<br> <br> Incorrect Answers: ' + game[ID].incorrect_answers;
}

function displayJoke() {
    quote.innerHTML = game[ID].joke;
}

function displayPickUpLine() {
    quote.innerHTML = game[ID];
}

// function nextJoke() {

//     if (ID == game.length) {
//         const promise = new Promise(function(resolve, reject) {
//                 getJokes();
//                 resolve();
//             })
//             .then(function(result) {
//                 getJokesFromLocalStorage();
//             })
//             .then(function() {
//                 displayJoke();
//             });
//         ID = 0;
//     } else {
//         displayJoke();
//     };
// };

function fillHeart() {

    if (toggle === true) {
        console.log('added')
        heart.src = "./images/heart red.svg";
        addToFavourites();
    } else {
        console.log('removed')
        heart.src = "./images/heart.svg";
        removeFromFavourites();
    }
    toggle = !toggle;
}

function addToFavourites() {
    let newFavourite = new Card(nr, selected, color, game[ID])
    savedFavourites.push(newFavourite);
    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
    nr++;
}

function removeFromFavourites() {

    for (i = 0; i < savedFavourites.length; i++) {
        if (game[ID].id == savedFavourites[i].id) {
            console.log(savedFavourites[i].id)
            savedFavourites.splice(i, 1);
        }
    }

    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}

function loadJokes() {
    color = '#564787';
    displayJoke();
};

function loadFacts() {
    displayFact();

    // TODO : change title of front card
    cardTitle.innerHTML = 'QUESTION'

    color = '#696773';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';
};

function loadPickUpLines() {
    displayPickUpLine();

    // TODO : change title of front card
    cardTitle.innerHTML = 'Pick Up Lines'

    color = '#009FB7';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';

}


function next() {
    ID++;
    toggle = true;
    heart.src = "./images/heart.svg";

    if (selected == 'Jokes') {
        displayJoke();
    } else if (selected == 'Facts') {
        displayFact();
    }

    if (savedFavourites.length > 0) {
        isFavourite();
    }

    if (ID == game.length - 1) {
        ID = 0;
    }
}

function isFavourite() {

    if (game[ID].id != undefined) {
        for (i = 0; i < savedFavourites.length; i++) {
            if (game[ID].id == savedFavourites[i].entry.id) {
                heart.src = "./images/heart red.svg";
                toggle = false;
            }
        }

    } else if (game[ID].question != undefined) {
        for (i = 0; i < savedFavourites.length; i++) {

            if (game[ID].question == savedFavourites[i].entry.question) {
                heart.src = "./images/heart red.svg";
                console.log('question: ' + game[ID].question)
                toggle = false;
            }
        }
    }
}

loadPage()

// Possible to make only one load function? that recognizes what was clicked and then displays correctly?