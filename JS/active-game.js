var url_string = window.location.href;
var url = new URL(url_string);
var game = url.searchParams.get("game");
let quote = document.querySelector('#quote');
ID = 0; 
let facts = [];
let jokes = [];
let favoriteJokes = [];
let favoriteFacts = [];
if(game === 'joke') {
    jokes = JSON.parse(localStorage.getItem('Jokes')); 
    if(Array.isArray(JSON.parse(localStorage.getItem('favoriteJokes'))))
    {
        favoriteJokes = JSON.parse(localStorage.getItem('favoriteJokes')); 
    }
    document.querySelector('#title').innerHTML = 'JOKE CARD';
} else if(game === 'fact') {
    facts = JSON.parse(localStorage.getItem('Facts'));
    if(Array.isArray(JSON.parse(localStorage.getItem('favoriteFacts'))))
    {
        favoriteFacts = JSON.parse(localStorage.getItem('favoriteFacts'));
    }
    document.querySelector('#title').innerHTML = 'FACT CARD';
}
function display() {
    if(game === 'joke') {
        quote.innerHTML = jokes[ID].joke;
        if(in_array(jokes[ID], favoriteJokes)) {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
        } else {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
        }
    } else if(game === 'fact') {
        let html = `
        <h4 class='fact-title'>this Fact is ${facts[ID].correct_answer}</h4>
        ${facts[ID].question}
        `;
        quote.innerHTML = html;
        if(in_array(facts[ID], favoriteFacts)) {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
        } else {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
        }
        
    }
    
}  
function next() {
    ID++;

    display()
    if(game === 'joke') {
        if (ID == jokes.length - 1) {
            getJokes();
            ID = 0;
        }
    } else if(game === 'fact') {
        if (ID == facts.length - 1) {
            getFacts();
            ID = 0;
        }
    }
  };  
display();
function in_array(item, array, mode = 'tf') {
    for(let i=0; i<array.length ; i++)
    {
        if(game === 'joke' ) {
            if(item.joke == array[i].joke) {
                if(mode === 'tf') {
                    return true;
                } else {
                    return i;
                }     
            }
        } else if(game === 'fact') {
            if(item.question == array[i].question) {
                return (mode === 'tf') ? true : i;
            }
        }
        
    }
    return (mode === 'tf') ? false : -1;
}
function favorite() {
    if(game === 'joke') {
        if(in_array(jokes[ID], favoriteJokes)) {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
            favoriteJokes.splice(in_array(jokes[ID], favoriteJokes, 'index'), 1);
        } else {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
            favoriteJokes.push(jokes[ID]);
        }
        localStorage.setItem('favoriteJokes', JSON.stringify(favoriteJokes));
    } else if(game === 'fact') {
        if(in_array(facts[ID], favoriteFacts)) {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
            favoriteFacts.splice(in_array(facts[ID], favoriteFacts, 'index'), 1);
        } else {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
            favoriteFacts.push(facts[ID]);
        }
        localStorage.setItem('favoriteFacts', JSON.stringify(favoriteFacts));
    }
    
} 