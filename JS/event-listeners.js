
setupEventListeners = (function() {
    return {
        getJokes: function () { 
            document.querySelector('#get_jokes').addEventListener('click', function() {
                if (JSON.parse(localStorage.getItem('Jokes')) == undefined) {
                    console.log('no jokes')
                    fetchAPIs.getJokes()
                } else {
                    console.log('already has jokes')
                }
             });
            document.querySelector('#get_jokes_mobile').addEventListener('click', fetchAPIs.getJokes);
        },

        nextJoke: function () {
            document.querySelector('#next_joke').addEventListener('click', activeGame.nextJoke)
        }
    }
})()