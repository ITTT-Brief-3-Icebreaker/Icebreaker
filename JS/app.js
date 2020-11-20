let facts = [];
let jokes = [];
let advice = [];

function newData() {
  let ID = Math.floor(Math.random() * 50);
  document.querySelector('#line').innerHTML = 'titel: ' + facts[ID].title + '<br />body: ' + facts[ID].body;
};

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
    console.log('eeg')
      fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=10')
        .then(response => response.json())
        .then(data => {jokes = data, localStorage.setItem('Jokes', JSON.stringify(jokes))})    
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