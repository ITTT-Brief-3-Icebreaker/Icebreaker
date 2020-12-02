let getAllFavourites, heartSvg, nrOfPages;
let toggle = false;
let pageID = 1;
let end = 8;
let selected = [];
let amountSelected = 0;
let selectedEntries = [];


document.querySelector('.add_jokes').addEventListener('click', chooseCategories)
document.querySelector('.add_facts').addEventListener('click', chooseCategories)
document.querySelector('.add_pickup_lines').addEventListener('click', chooseCategories)
document.querySelector('.add_conversation').addEventListener('click', chooseCategories)
document.querySelector('.select_btn').addEventListener('click', chooseCategories);



function chooseCategories() {
    selected = [];
    selectedEntries = [];
    amountSelected = 0;

    if (event.target == document.querySelector('.add_jokes')) {
        selected.push('Jokes');
    } 
    if (event.target == document.querySelector('.add_facts')) {
        selected.push('Facts');
    }
    if (event.target == document.querySelector('.add_pickup_lines')) {
        selected.push('pickUpLines');
    }
    if (event.target == document.querySelector('.add_conversation')) {
        selected.push('Conversation');
    }
    if (event.target == document.querySelector('.select_btn')) {
        selected.push('Jokes', 'Facts', 'pickUpLines', 'Conversation');
    }

    if (getAllFavourites.length <= 0) {
        favouritesContainer.innerHTML = "";
        noFavourites()   
    }

    if (selected.length > 0) {
        for (i = 0; i < getAllFavourites.length; i++) {
            for (j = 0; j < selected.length; j++) {
                if (getAllFavourites[i].type == selected[j]) {
                    selectedEntries.push(i)
                    amountSelected++
                }
            }
        }
            console.log(amountSelected)
        setupPages();
    } else {
        alert('select category')
    }

    setupRemoveFunction();
};

function displaySelectedCategories(i) {

    let container = document.createElement('div')
    container.className = "jokes-back card";

    let next = document.createElement('div')
    next.className = "next";

    let heartContainer = document.createElement('div')
    heartContainer.className = "heartContainer";

    heartSvg = document.createElement("img")
    heartSvg.className = "heart"
    heartSvg.classList.add("remove");
    heartSvg.id = getAllFavourites[i].nr;
    heartSvg.src = "./images/heart red.svg";


    let title = document.createElement("h3")
    title.id = "card-title";

    if (getAllFavourites[i].type == "pickUpLines") {
        title.innerHTML = "Pick Up Lines"
    } else if (getAllFavourites[i].type == "Conversation") {
        title.innerHTML = "Topics"
    } else if (getAllFavourites[i].type == "Facts") {
        title.innerHTML = "Trivia"
    } else {
        title.innerHTML = getAllFavourites[i].type
    }

    let quote = document.createElement("p")
    quote.id = "quote";
    quote.className = "answer";

    if (getAllFavourites[i].type == "Jokes") {
        quote.innerHTML = getAllFavourites[i].entry.setup +
        '<br> <br>' + getAllFavourites[i].entry.punchline ;


    } else if (getAllFavourites[i].type == "Facts") {
        quote.innerHTML = getAllFavourites[i].entry.question + 
        '<br> <br> Correct answer: <br>' + getAllFavourites[i].entry.correct_answer
            // + '<br> <br> Incorrect Answers: ' + 
            //getAllFavourites[i].entry.incorrect_answers;

    } else if (getAllFavourites[i].type == "pickUpLines") {
        quote.innerHTML = getAllFavourites[i].entry;
    } else if (getAllFavourites[i].type == "Conversation") {
        quote.innerHTML = getAllFavourites[i].entry.text;
    }
    container.style = 'border-color: ' + getAllFavourites[i].color + ';';

    container.appendChild(next);
    next.appendChild(heartContainer);
    heartContainer.appendChild(title);
    heartContainer.appendChild(heartSvg);
    next.appendChild(quote);
    favouritesContainer.appendChild(container);
}

// function renderFavourites() {
// }

function getFavourites() {
    getAllFavourites = JSON.parse(localStorage.getItem('Favourites'));
    console.log('get favs')
}

function removeFromAllFavourites() {

    for (i = 0; i < getAllFavourites.length; i++) {
        if (event.target.id == getAllFavourites[i].nr) {
            event.target.parentNode.parentNode.parentNode.style = "display: none;";
            getAllFavourites.splice(i, 1);
        }
    }

    localStorage.setItem('Favourites', JSON.stringify(getAllFavourites))

    if (window.matchMedia("(max-width: 600px)").matches) {
        if (getAllFavourites.length >= pageID) {
            console.log(pageID)
            displaySelectedCategories(pageID - 1);
            document.querySelector('#nr-of-pages').lastChild.style = 'display: none;';
        }
    } else if (getAllFavourites.length >= end) {
        displaySelectedCategories(end - 1);
    }

    setupRemoveFunction();

    if (nrOfPages > Math.ceil(getAllFavourites.length / amountofCards)) {
        nrOfPages = Math.ceil(getAllFavourites.length / amountofCards);
        document.querySelector('#nr-of-pages').lastChild.style = 'display: none;';
    }

    if (getAllFavourites.length <= 0) {
        noFavourites()
    }
}

window.onload = function (){
    getFavourites();
    setAmountOfCards();
    setupRemoveFunction();
}

// TODO: reset nr:s of getAllFavourites after one has been removed on both favourites and active-game

// TODO: change the nr of displayed cards depending on screen width

// TODO: adjust the titles to the cards 
// Clean up CSS of cards
// add menu to all pages
// make titles cohesive for all pages
