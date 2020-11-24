let pickupLinesHtml = document.querySelector('#next_quote');

let ID = 0;

function displayQuote() {
    quotes.innerHTML = jokes[ID].joke;
}

function nextQuote() {
    ID++;

    displayQuote()

    if (ID == jokes.length - 1) {
        getQuotes()
        ID = 0;
    }
};

displayJoke();

async function getPickupLines() {
    let response = await fetch('https://codeshifu-pickup-lines.glitch.me/api');
    let pickUpLines = await response.json();
    // .then (data => data.JSON()
    console.log(pickUpLines)
}