

// JOKES
document.querySelector('#get_jokes').addEventListener('click', getJokes);


if (document.querySelector('#get_jokes_mobile')){
    document.querySelector('#get_jokes_mobile').addEventListener('click', getJokes);
}

if (document.querySelector('#next')) {
    document.querySelector('#next').addEventListener('click', function() {
        if (event.target.classList.contains('heart')) {
            fillHeart()
        } else {
            next();
        }
    })
}

if (document.querySelector('#facts-mobile')) {
    document.querySelector('#facts-mobile').addEventListener('click', getFacts);
    console.log('gactalkdg')
}