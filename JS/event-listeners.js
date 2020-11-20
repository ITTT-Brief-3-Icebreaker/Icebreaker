// JOKES
document.querySelector('#get_jokes').addEventListener('click', getJokes);


if (document.querySelector('#next_joke')) {
    document.querySelector('#next_joke').addEventListener('click', nextJoke) 
}
// document.querySelector('#get_jokes_desktop').addEventListener('click', getJokes);

// // RANDOM LATIN
// document.querySelector('#get_lines').addEventListener('click', componentDidMount);
// document.querySelector('#next_line').addEventListener('click', newData) 

// document.querySelector('#get_lines_desktop').addEventListener('click', componentDidMount);


// document.querySelector('#get_advice').addEventListener('click', getAdvice);
// document.querySelector('#next_advice').addEventListener('click', nextAdvice) 

let favourites = document.querySelector('.heart')
if (favourites) {
    favourites.addEventListener('click', fillHeart)
}