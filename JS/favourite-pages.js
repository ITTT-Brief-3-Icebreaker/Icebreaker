let amountofCards;

document.querySelector('#nr-of-pages').addEventListener('click', goToPage);

function goToPage() {
    let pageID = event.target.id;
    end = amountofCards * pageID;
    let start = end - amountofCards;

    // console.log(nrOfPages)
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

function setupPages() {

    favouritesContainer.innerHTML = "";
    document.querySelector('#nr-of-pages').innerHTML = "";

    nrOfPages = Math.ceil(getAllFavourites.length / amountofCards)
    console.log('nr Pages: ' + nrOfPages)
    console.log('nr of cards' + getAllFavourites.length)
    
    if (nrOfPages > 1) {
        for (let i = 0; i < amountofCards; i++) {
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
        document.querySelector('#nr-of-pages').appendChild(link);
    };
}

function setAmountOfCards() {
    // let widthOfCard = 215;
    if (window.innerWidth > 1100) {
        amountofCards = 8
    } else if (window.innerWidth > 860){
        amountofCards = 6
    } else if (window.innerWidth > 600){
        amountofCards = 4
    } else {
        amountofCards = 1;
    }

    // console.log(window.innerWidth)
    // console.log(window.innerWidth / widthOfCard)
    // console.log('amount of cards: ' + amountofCards)

    setupPages();
}


window.onresize = setAmountOfCards;
// window.onload = setAmountOfCards;

// if search results have been filtered, they dont display correctly on resize