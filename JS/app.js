let index = (function(eventListeners) {

  let swiper = new Swiper('.swiper-container', {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  return {
    loadPage: function () {
      console.log('load index')
      eventListeners.getJokes()
    }
  }

})(setupEventListeners);

index.loadPage();






// ALTERNATIVE WAY OF WRITING
// async function componentDidMount() {
//     console.log("fetch init")
//     const response = await fetch('https://callook.info/W1AW/json')
//     const data = await response.json()
//     console.log(data)
//     // const posts = [...this.state.posts, ...data]
//     console.log("fetch done")
//   }
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
