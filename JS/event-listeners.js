let favourites = document.querySelector('.heart');
// let facts = document.querySelector('#facts-mobile');

// JOKES
document.querySelector('#get_jokes').addEventListener('click', getJokes);


if (document.querySelector('#get_jokes_mobile')){
    document.querySelector('#get_jokes_mobile').addEventListener('click', getJokes);
}

if (document.querySelector('#next_joke')) {
    document.querySelector('#next_joke').addEventListener('click', nextJoke) 
}

if (document.querySelector('#next-fact')) {
    document.querySelector('#next-fact').addEventListener('click', nextFact) 
}

if (favourites) {
    favourites.addEventListener('click', fillHeart);
}

if (document.querySelector('#facts-mobile')) {
    document.querySelector('#facts-mobile').addEventListener('click', getFacts);
    console.log('gactalkdg')
}