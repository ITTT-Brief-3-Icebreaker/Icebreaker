let jokesArray = JSON.parse(localStorage.getItem('Jokes'));

// console.log(jokes.jokes)

ID = 0;

document.querySelector('#next_joke').addEventListener('click', nextJoke) 
document.querySelector('#quote').innerHTML = jokesArray.jokes[ID].joke;

function nextJoke() {
    ID++;
    document.querySelector('#quote').innerHTML = jokes.jokes[ID].joke;
    console.log(ID)
    console.log(jokesArray)
    if (ID == jokesArray.amount - 1) {
        console.log(ID)
        getJokes()
        ID = 0;
    }
  };