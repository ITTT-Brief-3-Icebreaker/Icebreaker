let advice = [];

// function nextJoke() {
//   let ID = Math.floor(Math.random() * 10);
//   document.querySelector('#quote').innerHTML = jokes.jokes[ID].joke;
// };



  // function componentDidMount() {
  //     fetch('https://jsonplaceholder.typicode.com/posts')
  //       .then(response => response.json())
  //       .then(data => facts = data)    
  //   }

  function getJokes() {
    console.log('get new Jokes')
      fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=10')
        .then(response => response.json())
        .then(data => localStorage.setItem('Jokes', JSON.stringify(data.jokes)))    
        // .then(jokes => )
    }
    function getFacts() {
      console.log('Facts')
        fetch('https://opentdb.com/api.php?amount=20&category=9&difficulty=easy&type=boolean')
          .then(response => response.json())
          .then(data => {
            facts = data.results, localStorage.setItem('Facts', JSON.stringify(facts))
          })    
          // .then(jokes => )
   }
   getFacts();
   getJokes();
    


// ALTERNATIVE WAY OF WRITING
// async function componentDidMount() {
//     console.log("fetch init")
//     const response = await fetch('https://callook.info/W1AW/json')
//     const data = await response.json()
//     console.log(data)
//     // const posts = [...this.state.posts, ...data]
//     console.log("fetch done")
//   }

var swiper = new Swiper('.swiper-container', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});