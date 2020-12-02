let getAllFavourites, heartSvg, nrOfPages;
let toggle = false;
let pageID = 1;
let end = 8;
let selected = [];
let amountSelected = 0;
let selectedEntries = [];


let addJokes = document.querySelector('.add_jokes')
addJokes.addEventListener('click', chooseCategories)
let addFacts = document.querySelector('.add_facts')
addFacts.addEventListener('click', chooseCategories)
let addPickup = document.querySelector('.add_pickup_lines')
addPickup.addEventListener('click', chooseCategories)
let addConversation = document.querySelector('.add_conversation')
addConversation.addEventListener('click', chooseCategories)
let addAll = document.querySelector('.select_btn')
addAll.addEventListener('click', chooseCategories);



function chooseCategories() {
    selected = [];
    selectedEntries = [];
    amountSelected = 0;
    pageID = 1;
     
    // for (let i = 0; i < 4; i++) {
    //     document.querySelectorAll('.check' + (i + 1)).style  = 'background: #fff;';
    // }

    document.querySelectorAll('.check').forEach(element => {
        element.style = 'background: #fff; color: #000'
    })

    if (event.target == document.querySelector('.add_jokes')) {
        selected.push('Jokes');
        addJokes.style  = 'outline: none; background: #9AD4D6; color: #fff;';
    } 
    if (event.target == document.querySelector('.add_facts')) {
        selected.push('Facts');
        addFacts.style  = 'outline: none; background: #9AD4D6; color: #fff;';
    }
    if (event.target == document.querySelector('.add_pickup_lines')) {
        selected.push('pickUpLines');
        addPickup.style  = 'outline: none; background: #9AD4D6; color: #fff;';
    }
    if (event.target == document.querySelector('.add_conversation')) {
        selected.push('Conversation');
        addConversation.style  = 'outline: none; background: #9AD4D6; color: #fff;';
    }
    if (event.target == document.querySelector('.select_btn')) {
        selected.push('Jokes', 'Facts', 'pickUpLines', 'Conversation');
        addAll.style  = 'outline: none; background: #9AD4D6; color: #fff;';
    }

    if (getAllFavourites.length <= 0) {
        favouritesContainer.innerHTML = "";
        noFavourites('favourites')   
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
        setupPages();
    } 
    
    if (selectedEntries.length <= 0) {
        if (selected[i] == 'Jokes'){
            noFavourites('Jokes')
        } else if (selected[i] == 'Facts'){
            noFavourites('Trivia')
        } else if (selected[i] == 'pickUpLines'){
            noFavourites('Pick-up Lines')
        } else if (selected[i] == 'Conversation'){
            noFavourites('Topics')
        } 
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
    if (JSON.parse(localStorage.getItem('Favourites'))) {
        getAllFavourites = JSON.parse(localStorage.getItem('Favourites'));
    } else {
        getAllFavourites = [];
    }
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
        noFavourites('favourites')
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
