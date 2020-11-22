let favourites = document.querySelector('.heart');

// JOKES
document.querySelector('#get_jokes').addEventListener('click', getJokes);


if (document.querySelector('#get_jokes_mobile')){
    document.querySelector('#get_jokes_mobile').addEventListener('click', getJokes);
}

if (document.querySelector('#next_joke')) {
    document.querySelector('#next_joke').addEventListener('click', nextJoke) 
}


if (favourites) {
    favourites.addEventListener('click', fillHeart)
}