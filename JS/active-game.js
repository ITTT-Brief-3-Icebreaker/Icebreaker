let quote = document.querySelector('#quote');
let cardTitle = document.querySelector('#card-title');
let frontTitle = document.querySelector('#front-title');
let heart = document.querySelector('.heart');

let jokes, game, savedFavourites, selected, color, toggle, nr;
let ID = 0;

let Card = function(nr, type, color, entry) {
    this.nr = nr,
    this.type = type,
    this.color = color,
    this.entry = entry
}

function loadPage() {
    let url_string = window.location.href;
    let url = new URL(url_string);
    selected = url.searchParams.get("selected");

    toggle = true;

    if (selected == 'Jokes') {
        getJokes();
    } else if (selected == 'Facts') {
        getFacts();
    } else if (selected == 'pickUpLines') {
        getPickupLines()
    }
}

function getFromLocalStorage(key) { 

    game = JSON.parse(localStorage.getItem(key));
    if (JSON.parse(localStorage.getItem('Favourites')) && localStorage.Favourites.length > 3) {
        savedFavourites = JSON.parse(localStorage.getItem('Favourites'));
        nr = savedFavourites[savedFavourites.length - 1].nr + 1;
    } else {
        savedFavourites = [];
        nr = 0;
    };
};

function setup() {
    getFromLocalStorage(selected)

    if (selected == 'Jokes') {
        loadJokes();
    } else if (selected == 'Facts') {
        loadFacts();
    } else if (selected == 'pickUpLines') {
        loadPickUpLines()
    };
}

function loadJokes() {
    color = '#564787';
    displayJoke();
};

function loadFacts() {
    displayFact();

    // TODO : change title of front card
    cardTitle.innerHTML = 'QUESTION';
    frontTitle.innerHTML = 'QUESTION';

    color = '#696773';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';
};

function loadPickUpLines() {
    displayPickUpLine();

    // TODO : change title of front card
    cardTitle.innerHTML = 'PICK-UP LINE'
    frontTitle.innerHTML = 'PICK-UP LINE'

    color = '#009FB7';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';

}

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

function next() {
    ID++;
    toggle = true;
    heart.src = "./images/heart.svg";

    if (selected == 'Jokes') {
        displayJoke();
    } else if (selected == 'Facts') {
        displayFact();
    } else if (selected == 'pickUpLines') {
        displayPickUpLine();
    }

    if (savedFavourites.length > 0) {
        isFavourite();
    }

    if (ID == game.length - 1) {
        ID = 0;
    }
}

function isFavourite() {

    if (selected == 'pickUpLines') {
        for (i = 0; i < savedFavourites.length; i++) {
            if (game[ID] == savedFavourites[i].entry) {
                heart.src = "./images/heart red.svg";
                toggle = false;
            }
        }
    } else if (game[ID].id != undefined) {
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
                toggle = false;
            }  
        }
    }
}

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
    let newFavourite = new Card (nr, selected, color, game[ID])
    savedFavourites.push(newFavourite);
    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
    nr++;
}

function removeFromFavourites() {

    for (i = 0; i < savedFavourites.length; i++) {
        if (game[ID].id == savedFavourites[i].nr || 
            game[ID] == savedFavourites[i].entry ||
            game[ID].id == savedFavourites[i].entry.id) {
            savedFavourites.splice(i, 1);
            console.log('spliced')
        } 
    }

    localStorage.setItem('Favourites', JSON.stringify(savedFavourites))
}

loadPage()


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


// Tried to simplify the function but didnt get it to works so far 
// function isFavourite() {
//     for (i = 0; i < savedFavourites.length; i++) {
//         if (game[ID] == savedFavourites[i].entry ||
//             game[ID].id == savedFavourites[i].entry.nr ||
//             game[ID].question == savedFavourites[i].entry.question) {
//                 heart.src = "./images/heart red.svg";  
//                 console.log('true')
//                 toggle = false;
//         }
        
//     }
// }