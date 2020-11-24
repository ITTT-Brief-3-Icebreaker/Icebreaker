let getAllFavourites, selected, favouritesContainer;

document.querySelector('.select_btn').addEventListener('click', chooseCategories)

function chooseCategories() {
    let selected = [];

    if (document.querySelector('.add_jokes').checked) {
       selected.push('Jokes');
    }
    if (document.querySelector('.add_facts').checked) {
        selected.push('Facts');
    }

    favouritesContainer.innerHTML = "";
    
    for (i = 0; i < getAllFavourites.length; i++) {
        for(j = 0; j < selected.length; j++)

        if (getAllFavourites[i].type == selected[j]) {
            displaySelectedCategories(i);
        } 
    }

};

function displaySelectedCategories(i) {

    let container = document.createElement('div')
    container.className = "jokes-back card";
    let next = document.createElement('div')
    next.id = "next";

    container.appendChild(next);
    
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
    }

    container.style = 'border-color: ' + getAllFavourites[i].color + ';';
    
    next.appendChild(title);
    next.appendChild(quote);

    favouritesContainer.appendChild(container);
}

function renderFavourites() {
    console.log("hello")
    favouritesContainer = document.querySelector(".favourites-container");
    favouritesContainer.innerHTML = "";

    for(let i = 0; i < getAllFavourites.length; i++){
        displaySelectedCategories(i);
    };
}

function getFavourites() {
    getAllFavourites = JSON.parse(localStorage.getItem('Favourites'));
}

getFavourites()
renderFavourites();
