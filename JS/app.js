  function getJokes() {
    // if (JSON.parse(localStorage.getItem('Jokes')) == undefined) {
      console.log('get new Jokes')
      fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=100')
        .then(response => response.json())
        .then(data => localStorage.setItem('Jokes', JSON.stringify(data.jokes))) 
    // } else {
    //     console.log('already has jokes')
    // }
    localStorage.setItem('Clicked', JSON.stringify('Jokes'))
  }

  function getFacts() {
    console.log('Facts')
      fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data => {localStorage.setItem('Facts', JSON.stringify(data.results))})    
       
    localStorage.setItem('Clicked', JSON.stringify('Facts'));
  }
   
  function getInsults() {
    console.log('Insult')
      fetch('https://api.fungenerators.com/taunt/generate?category=new-age-insult&limit=5')
        .then(response => response.json())
        .then(data => {localStorage.setItem('Insults', JSON.stringify(data.results))})    
       
    localStorage.setItem('Clicked', JSON.stringify('Insult'));
  }

  var swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// ALTERNATIVE WAY OF WRITING
// async function componentDidMount() {
//     console.log("fetch init")
//     const response = await fetch('https://callook.info/W1AW/json')
//     const data = await response.json()
//     console.log(data)
//     // const posts = [...this.state.posts, ...data]
//     console.log("fetch done")
//   }
