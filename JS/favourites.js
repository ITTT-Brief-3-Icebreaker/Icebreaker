let getAllFavourites, selected, favouritesContainer, heartSvg;
let toggle = false;

document.querySelector('.select_btn').addEventListener('click', chooseCategories);

function chooseCategories() {
    let selected = [];

    if (document.querySelector('.add_jokes').checked) {
        selected.push('Jokes');
    }
    if (document.querySelector('.add_facts').checked) {
        selected.push('Facts');
    }
    if (document.querySelector('.add_pickup_lines').checked) {
        selected.push('pickUpLines');
    }
    if (document.querySelector('.add_conversation').checked) {
        selected.push('Conversation');
    }

    favouritesContainer.innerHTML = "";

    for (i = 0; i < getAllFavourites.length; i++) {
        for (j = 0; j < selected.length; j++)

            if (getAllFavourites[i].type == selected[j]) {
            displaySelectedCategories(i);
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
    title.innerHTML = getAllFavourites[i].type


    let quote = document.createElement("p")
    quote.id = "quote";
    quote.className = "answer";

    if (getAllFavourites[i].type == "Jokes") {
        quote.innerHTML = getAllFavourites[i].entry.joke;

    } else if (getAllFavourites[i].type == "Facts") {
        quote.innerHTML = getAllFavourites[i].entry.question + '<br> <br> A: ' +
            getAllFavourites[i].entry.correct_answer + '<br> <br> Incorrect Answers: ' + getAllFavourites[i].entry.incorrect_answers;

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

function renderFavourites() {

    favouritesContainer = document.querySelector(".favourites-container");
    favouritesContainer.innerHTML = "";

    for (let i = 0; i < getAllFavourites.length; i++) {
        displaySelectedCategories(i);
    };
}

function getFavourites() {
    getAllFavourites = JSON.parse(localStorage.getItem('Favourites'));
}

function removeFromAllFavourites() {

    for (i = 0; i < getAllFavourites.length; i++) {
        if (event.target.id == getAllFavourites[i].nr) {
            event.target.parentNode.parentNode.parentNode.style = "display: none;";
            getAllFavourites.splice(i, 1);
        }
    }

    localStorage.setItem('Favourites', JSON.stringify(getAllFavourites))
}

getFavourites()
renderFavourites();
setupRemoveFunction();

// TODO: reset nr:s of getAllFavourites after one has been removed on both favourites and active-game