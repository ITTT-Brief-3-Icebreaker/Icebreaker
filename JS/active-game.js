let jokes = JSON.parse(localStorage.getItem('Jokes'));
let quote = document.querySelector('#quote');

ID = 0;

function displayJoke() {
    quote.innerHTML = jokes[ID].joke;
}

function nextJoke() {
    ID++;

    displayJoke()

    if (ID == jokes.length - 1) {
        getJokes()
        ID = 0;
    }
  };

    displayJoke();

    // Issue: gets new jokes but does not update the array on this page. 