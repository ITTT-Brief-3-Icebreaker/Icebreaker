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

        if (selected.length > 0) {
            displaySelectedCategories(selectedEntries[pageID] -1)
        } else {
            displaySelectedCategories(pageID -1)
        }
        setCurrentPage(pageID)  

        console.log(pageID)
        setupRemoveFunction();
    }
}

function goRight() {
    console.log('right')

    if (pageID < (nrOfPages)) {
        
        favouritesContainer.innerHTML = "";

        if (selected.length > 0) {
            displaySelectedCategories(selectedEntries[pageID])
        } else {
            displaySelectedCategories(pageID)   
        }
        
        pageID++

        setCurrentPage(pageID)
        console.log(pageID)
        setupRemoveFunction();
    }
}

function goToPage() {
    
    console.log('selected: ' + selected)
    splitID = event.target.id.split('e');
    pageID = splitID[1];
    end = amountofCards * pageID;
    let start = end - amountofCards;
    
    favouritesContainer.innerHTML = "";

    if (nrOfPages > pageID) {
        if (selected.length > 0) {
            for (let i = start; i < end; i++) {
                displaySelectedCategories(selectedEntries[i])   
            }
        } else {
            for (let i = start; i < end; i++) {
                displaySelectedCategories(i)   
            }
        }
    } else {
        if (selected.length > 0) {
            for (let i = start; i < getAllFavourites.length; i++) {
                displaySelectedCategories(selectedEntries[i])   
            }
        } else {    
            for (let i = start; i < getAllFavourites.length; i++) {
                displaySelectedCategories(i);
            }
        }
    }

    setCurrentPage(pageID)
    setupRemoveFunction();
}

function setupPages() {

    if (getAllFavourites.length <= 0) {
        noFavourites()   
    }

    favouritesContainer.innerHTML = "";
    document.querySelector('#nr-of-pages').innerHTML = "";
    

    if (selected.length > 0) {
        nrOfPages = Math.ceil(amountSelected / amountofCards)    
    } else {
        nrOfPages = Math.ceil(getAllFavourites.length / amountofCards)
    }

    if (nrOfPages > 1) {
        if (selected.length > 0){ 
            console.log('selection has been made')
            for (i = 0; i < amountofCards; i++) {
                // for (j = 0; j < selected.length; j++) {
                //     if (getAllFavourites[i].type == selected[j]) {
                        displaySelectedCategories(selectedEntries[i]);
                    // }
                // }
            }   
        } else {
            for (let i = 0; i < amountofCards; i++) {
                
                displaySelectedCategories(i);
            }
        }
    } else {
        if (selected.length > 0){ 
            console.log('selection has been made')
            for (i = 0; i < getAllFavourites.length; i++) {
                    for (j = 0; j < selected.length; j++) 
                        if (getAllFavourites[i].type == selected[j]) {
                        displaySelectedCategories(i);
                    }
                }    
        } else {
            for (let i = 0; i < getAllFavourites.length; i++) {
                displaySelectedCategories(i);
            }
        }
    }
    



    console.log('nr Pages: ' + nrOfPages)
    console.log('nr of cards ' + getAllFavourites.length)
    console.log('amount per page: ' + amountofCards)

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
}

window.onresize = setAmountOfCards;


// if search results have been filtered, they dont display correctly on resize