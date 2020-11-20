let fetchAPIs = (function() { 

    return {
        getJokes: function () {
            console.log('get new Jokes')

            fetch('https://sv443.net/jokeapi/v2/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist&type=single&amount=10')
                .then(response => response.json())
                .then(data => localStorage.setItem('Jokes', JSON.stringify(data.jokes)))   
        },

        getFacts: function () {
            console.log('get Facts')

            fetch('https://opentdb.com/api.php?amount=10')
                .then(response => response.json())
                .then(data => {data, localStorage.setItem('Facts', JSON.stringify(data))})    
        }
    }
})();

