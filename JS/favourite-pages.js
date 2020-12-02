let favouritesContainer = document.querySelector(".favourites-container");
let amountofCards;

document.querySelector('#nr-of-pages').addEventListener('click', goToPage);
document.querySelector('.fa-chevron-left').addEventListener('click', goLeft);
document.querySelector('.fa-chevron-right').addEventListener('click', goRight);

function noFavourites() {
    console.log('no favourites')

    let container = document.createElement('div')
    container.className = "jokes-back card";

    let title = document.createElement("h3")
    title.innerHTML = "OOPS!"

    let quote = document.createElement('p')
    quote.classList.add('answer')
    quote.innerHTML = 'You don\'t seem to have any saved favourites';

    let goHome = document.createElement('a')
    goHome.id = 'go-home'
    goHome.href = 'index.html'
    goHome.innerHTML = 'Go back to add favourites <br> <i class="fas fa-arrow-left"></i>'

    container.appendChild(title);
    container.appendChild(quote);
    container.appendChild(goHome);
    favouritesContainer.appendChild(container);
}

function goLeft() {
    console.log('left')

    if (pageID > 1) {

        pageID--;
        favouritesContainer.innerHTML = "";

        displaySelectedCategories(pageID -1)
        setCurrentPage(pageID)  

        console.log(pageID)
        setupRemoveFunction();
    }
}

function goRight() {
    console.log('right')

    if (pageID < (nrOfPages)) {
        
        favouritesContainer.innerHTML = "";
        displaySelectedCategories(pageID)   
        
        pageID++

        setCurrentPage(pageID)
        console.log(pageID)
        setupRemoveFunction();
    }
}

function goToPage() {
    
    splitID = event.target.id.split('e');
    pageID = splitID[1];
    end = amountofCards * pageID;
    let start = end - amountofCards;
    
    console.log(pageID)
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

    setCurrentPage(pageID)
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
        link.id = ('page' + (i + 1));
        document.querySelector('#nr-of-pages').appendChild(link);
    };

    setCurrentPage(pageID)
    
}

function setCurrentPage(current) {
    let setCurrent = document.querySelector('#page' + current);

    if(setCurrent){
        setCurrent.style = 'color: black;';
    }
}
function setAmountOfCards() {

    if (window.matchMedia("(min-width: 1204px)").matches) {
        amountofCards = 8;
        setupPages();
      } else if (window.matchMedia("(min-width: 860px)").matches) {
        amountofCards = 6;
        setupPages();
      } else if (window.matchMedia("(min-width: 600px)").matches) {
        amountofCards = 4;
        setupPages();
      } else {
        amountofCards = 1;
        setupPages();
      }

    if (getAllFavourites.length <= 0) {
        noFavourites()   
    }
}

window.onresize = setAmountOfCards;


// if search results have been filtered, they dont display correctly on resize