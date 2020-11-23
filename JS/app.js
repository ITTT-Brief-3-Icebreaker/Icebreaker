let facts = [];
let advice = [];


  function getJokes() {
    console.log('get new Jokes')
      fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=10')
        .then(response => response.json())
        .then(data => localStorage.setItem('Jokes', JSON.stringify(data.jokes)))    
        // .then(jokes => )
    }

    getFacts()
    function getFacts() {
      console.log('Facts')
        fetch('https://opentdb.com/api.php?amount=10')
          .then(response => response.json())
          .then(data => {facts = data, localStorage.setItem('Facts', JSON.stringify(facts))})    
          // .then(jokes => )
      }

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});