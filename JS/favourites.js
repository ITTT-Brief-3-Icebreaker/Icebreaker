let getAllFavourites, selected, favouritesContainer, heartSvg, nrOfPages;
let toggle = false;
let pageID = 1;
let end = 8;

document.querySelector('.select_btn').addEventListener('click', chooseCategories);

document.querySelector('#nr-of-pages').addEventListener('click', goToPage);

function goToPage() {
    let pageID = event.target.id;
    end = 8 * pageID;
    let start = end - 8;

    favouritesContainer.innerHTML = "";

    if (nrOfPages > pageID) {
        for (let i = start; i < end; i++) {
            displaySelectedCategories(i)   
        }
    } else {
        for (let i = start; i < getAllFavourites.length; i++) {
            displaySelectedCategories(i);
        }
    }

    setupRemoveFunction();
}

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
    heartContainer.appendChild(heartSvg);
    next.appendChild(title);
    next.appendChild(quote);
    favouritesContainer.appendChild(container);
}

function renderFavourites() {

    favouritesContainer = document.querySelector(".favourites-container");
    favouritesContainer.innerHTML = "";

    let arrayLength = getAllFavourites.length;

    nrOfPages = Math.ceil(arrayLength / 8)

    console.log(nrOfPages)
    
    if (nrOfPages > 1) {
        for (let i = 0; i < 8; i++) {
            displaySelectedCategories(i);
        }
    } else {
        for (let i = 0; i < getAllFavourites.length; i++) {
            displaySelectedCategories(i);
        }
    }
    
    for (i = 0; i < nrOfPages; i++) {
        let link = document.createElement('a');
        link.innerHTML = i + 1;
        link.id = (i + 1);
        console.log(link.id)
        document.querySelector('#nr-of-pages').appendChild(link);
    };

    console.log('length: ' + getAllFavourites.length)
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

    console.log('end: ' + end)
    if (getAllFavourites.length > end) {
        console.log(getAllFavourites.length, end)
        displaySelectedCategories(end-1);
    }

    console.log(pageID)

    setupRemoveFunction();
}

getFavourites()
renderFavourites();
setupRemoveFunction();

// TODO: reset nr:s of getAllFavourites after one has been removed on both favourites and active-game

// TODO: remove page numbers when pages are empty