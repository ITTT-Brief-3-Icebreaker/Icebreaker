let jokesArray = JSON.parse(localStorage.getItem('Jokes'));

ID = 0;

document.querySelector('#next_joke').addEventListener('click', nextJoke) 
document.querySelector('#quote').innerHTML = jokesArray.jokes[ID].joke;

function nextJoke() {

    ID++;
    console.log(ID)
    document.querySelector('#quote').innerHTML = jokesArray.jokes[ID].joke;

    if (ID == jokesArray.amount - 1) {
        console.log(ID)
        getJokes()
        ID = 0;
    }
    
  };