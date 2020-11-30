let navIcon = document.getElementById("navIcon")
navIcon.addEventListener("click", toggleNavIvon)

function toggleNavIvon() {
    navIcon.classList.toggle("open");
}

const links = document.getElementById("myLinks");
function navPopOut() {
  if (links.style.display === "block") {
    links.style.display = "none";
  } else {
    links.style.display = "block";
  }
}


// very handsome yes close nav pls
const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener("click", closeNav)
link2.addEventListener("click", closeNav)
link3.addEventListener("click", closeNav)

function closeNav() {
    links.style.display = "none";
    toggleNavIvon();
}

function getJokes() {
    // if (JSON.parse(localStorage.getItem('Jokes')) == undefined) {
    console.log('get new Jokes')
    fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=100')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('Jokes', JSON.stringify(data.jokes)),
                setup()
        })

    // localStorage.setItem('Clicked', JSON.stringify('Jokes'))
}

function getFacts() {
    console.log('Facts')
    fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('Facts', JSON.stringify(data.results)),
                setup()
        })

    // localStorage.setItem('Clicked', JSON.stringify('Facts'));
}


async function getPickupLines() {
    let apiURL = "https://codeshifu-pickup-lines.glitch.me/api";
    let response = await fetch(apiURL);
    pickUpData = await response.json();
    localStorage.setItem("pickUpLines", JSON.stringify(pickUpData.data));
    // .then (data => data.JSON()
    // console.log(pickUpData.data[ID])
    setup();


}

function getConversation() {
  console.log('getting conversation starters')
    fetch('https://run.mocky.io/v3/038ea8b2-5c2c-43e0-8283-d089008d658d')
        .then(response => response.json())
        .then(conversStarter => {
            localStorage.setItem('Conversation', JSON.stringify(conversStarter.lines))
            console.log(conversStarter.lines[0].text)
            console.log(2)
            setup()
        })
}

var swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});


let cardLink = document.querySelectorAll(".cardLink").forEach(card => {
    card.addEventListener("click", event => {
        card.classList.add('animate__animated', 'animate__flipOutY');
    })
})

function selectedJokes() {
    setTimeout(function(){
        window.location.href = "active-game.html?selected=Jokes"
    }, 600)
}

function selectedPickup() {
    setTimeout(function(){
        window.location.href = "active-game.html?selected=pickUpLines"
    }, 600)
}

function selectedTrivia() {
    setTimeout(function(){
        window.location.href = "active-game.html?selected=Facts"
    }, 600)
}

function selectedTopics() {
    setTimeout(function(){
        window.location.href = "active-game.html?selected=Conversation"
    }, 600)
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