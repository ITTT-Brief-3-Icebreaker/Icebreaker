let quote = document.querySelector('#quote');
let cardFront = document.querySelector('.jokes-front');
let cardBack = document.querySelector('.jokes-back');
let backTitle = document.querySelector('#card-title');
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
    } else if (selected == 'Conversation') {
        console.log(1)
        getConversation()
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

    cardFront.classList.remove('loading')
    quote.classList.remove('loading')
    frontTitle.classList.remove('loading')
    backTitle.classList.remove('loading')


    if (selected == 'Jokes') {
        loadJokes();
    } else if (selected == 'Facts') {
        loadFacts();
    } else if (selected == 'pickUpLines') {
        loadPickUpLines()
    } else if (selected == 'Conversation') {
        loadConversation()
    };
}

function loadJokes() {

    displayJoke();

    color = '#564787';

    backTitle.innerHTML = 'JOKES'
    frontTitle.innerHTML = 'JOKES'

    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';
};

function loadFacts() {
    displayFact();

    // TODO : change title of front card
    backTitle.innerHTML = 'TRIVIA';
    frontTitle.innerHTML = 'TRIVIA';

    color = '#696773';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';
};

function loadPickUpLines() {
    displayPickUpLine();

    // TODO : change title of front card
    backTitle.innerHTML = 'PICK UP LINES'
    frontTitle.innerHTML = 'PICK UP LINES'

    color = '#009FB7';
    document.querySelector('.jokes-front').style = 'background-color: ' + color + ';';
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';

}

function loadConversation() {
    displayConversation();

    backTitle.innerHTML = 'TOPICS'
    frontTitle.innerHTML = 'TOPICS'

    color = '#FED766';
    let black = '#000000';
    let jokesFront = document.querySelector('.jokes-front')
    jokesFront.style = 'background-color: ' + color + ';';
    jokesFront.childNodes.forEach(element => {
        element.style = 'color: ' + black + ';' + 'border-color: ' + black + ';';
    })
    jokesFront.fontcolor = black;
    document.querySelector('.jokes-back').style = 'border-color: ' + color + ';';

}

function displayFact() {
    quote.innerHTML = game[ID].question + 
    '<br> <br> Correct answer: <br>' + game[ID].correct_answer
}

function displayJoke() {
    quote.innerHTML = game[ID].setup +
    '<br> <br>' + game[ID].punchline ;
}

function displayPickUpLine() {
    quote.innerHTML = game[ID];
}

function displayConversation() {
    quote.innerHTML = game[ID].text;
}

function next() {
    ID++;
    toggle = true;
    heart.src = "./images/heart.svg";

    cardBack.classList.add('animate__animated', 'animate__rollIn');

    cardBack.addEventListener('animationend', () => {
        cardBack.classList.remove('animate__animated', 'animate__rollIn');
    })

    if (selected == 'Jokes') {
        displayJoke();
    } else if (selected == 'Facts') {
        displayFact();
    } else if (selected == 'pickUpLines') {
        displayPickUpLine();
    } else if (selected == 'Conversation') {
        displayConversation();
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
    let newFavourite = new Card(nr, selected, color, game[ID])
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

// let cardLink = document.querySelectorAll(".cardLink").forEach(card => {
//     card.addEventListener("click", event => {
//         card.classList.add('animate__animated', 'animate__flipOutY');
//     })
// })

// cardBack.addEventListener("click", function(){
//     card.classList.add('animate__animated', 'animate__flipOutY');
// })




// setTimeout(() => {
loadPage();
//   }, 5000);

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
//         if (game[ID] === savedFavourites[i].entry ||
//             game[ID].id === savedFavourites[i].entry.id ||
//             game[ID].question === savedFavourites[i].entry.question) {
//                 heart.src = "./images/heart red.svg";  
//                 console.log('true')
//                 toggle = false;
//         }

//     }
// }
