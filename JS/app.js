function getJokes() {
    fetch('https://run.mocky.io/v3/dde3b884-8754-42e3-8356-dd95babeb521')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('Jokes', JSON.stringify(data)),
                setup()
        })
}

function getFacts() {
    console.log('Facts')
    fetch('https://opentdb.com/api.php?amount=10')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('Facts', JSON.stringify(data.results)),
                setup()
        })
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