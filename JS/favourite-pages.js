let favouritesContainer = document.querySelector(".favourites-container");

let amountofCards;

document.querySelector('#nr-of-pages').addEventListener('click', goToPage);

document.querySelector('.fa-chevron-left').addEventListener('click', goLeft)
document.querySelector('.fa-chevron-right').addEventListener('click', goRight)

console.log(nrOfPages)
function goLeft() {

    if (pageID > 0) {
        pageID--;
        favouritesContainer.innerHTML = "";
        displaySelectedCategories(pageID)   
    }
}

function goRight() {
    if (pageID < nrOfPages){
        pageID++;
        favouritesContainer.innerHTML = "";
        displaySelectedCategories(pageID)   
        console.log(pageID)
    }
}

function goToPage() {
    pageID = event.target.id;
    end = amountofCards * pageID;
    let start = end - amountofCards;
    
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
    // if (window.innerWidth > 1100) {
    //     amountofCards = 8
    // } else if (window.innerWidth > 860){
    //     amountofCards = 6
    // } else if (window.innerWidth > 600){
    //     amountofCards = 4
    // } else {
    //     amountofCards = 1;
    // }

    if (window.matchMedia("(min-width: 1100px)").matches) {
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

    // setupPages();
}

// if (window.matchMedia("(min-width: 1100px)").matches) {
//     amountofCards = 8;
//     setupPages();
//   } else if (window.matchMedia("(min-width: 860px)").matches) {
//     amountofCards = 6;
//     setupPages();
//   } else if (window.matchMedia("(min-width: 600px)").matches) {
//     amountofCards = 4;
//     setupPages();
//   } else {
//     amountofCards = 1;
//     setupPages();
//   }
window.onresize = setAmountOfCards;


// if search results have been filtered, they dont display correctly on resize