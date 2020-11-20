
let activeGame = (function(eventListners, API) {  
    let quote = document.querySelector('#quote');

    let jokes = [];
    let ID = 0;

    let getJokes = function () {
        jokes = JSON.parse(localStorage.getItem('Jokes'));
    }
    let displayJoke = function () {
        quote.innerHTML = jokes[ID].joke;
    };

    return {
        nextJoke: function () {
            ID++;

            displayJoke()

            if (ID == jokes.length - 1) {
                API.getJokes()
                ID = 0;
            }
        },

        loadPage: function () {
            getJokes();
            displayJoke();
            eventListners.nextJoke();
        }
    }
})(setupEventListeners, fetchAPIs);

activeGame.loadPage();