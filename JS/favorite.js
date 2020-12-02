var url_string = window.location.href;
var url = new URL(url_string);
var game = url.searchParams.get("game");
let quote = document.querySelector('#quote');
ID = 0; 
let favoriteJokes = [];
let favoriteFacts = [];
if(game === 'joke') {
    if(Array.isArray(JSON.parse(localStorage.getItem('favoriteJokes'))))
    {
        favoriteJokes = JSON.parse(localStorage.getItem('favoriteJokes')); 
    }
    document.querySelector('#title').innerHTML = 'JOKE CARD';
} else if(game === 'fact') {
    if(Array.isArray(JSON.parse(localStorage.getItem('favoriteFacts'))))
    {
        favoriteFacts = JSON.parse(localStorage.getItem('favoriteFacts'));
    }
    document.querySelector('#title').innerHTML = 'FACT CARD';
}
function display() {
    if(game === 'joke') {
        if(favoriteJokes.length > 0) {
            quote.innerHTML = favoriteJokes[ID].joke;
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
        } else {
            quote.innerHTML = '';
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
        }
    } else if(game === 'fact') {
        if(favoriteFacts.length > 0) {
            let html = `
            <h4 class='fact-title'>this Fact is ${favoriteFacts[ID].correct_answer}</h4>
            ${favoriteFacts[ID].question}
            `;
            quote.innerHTML = html;
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far'); 
        } else {
            quote.innerHTML = '';
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
        if (ID == favoriteJokes.length - 1) {
            ID = -1;
        }
    } else if(game === 'fact') {
        if (ID == favoriteFacts.length - 1) {
            ID = -1;
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
        if(in_array(favoriteJokes[ID], favoriteJokes)) {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
            favoriteJokes.splice(in_array(favoriteJokes[ID], favoriteJokes, 'index'), 1);
        } else {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
            favoriteJokes.push(favoriteJokes[ID]);
        }
        localStorage.setItem('favoriteJokes', JSON.stringify(favoriteJokes));
    } else if(game === 'fact') {
        if(in_array(favoriteFacts[ID], favoriteFacts)) {
            document.querySelector('#favorite-icon').classList.remove('favorite');
            document.querySelector('#favorite-icon').classList.remove('fa');
            document.querySelector('#favorite-icon').classList.add('far');
            favoriteFacts.splice(in_array(facts[ID], favoriteFacts, 'index'), 1);
        } else {
            document.querySelector('#favorite-icon').classList.add('favorite');
            document.querySelector('#favorite-icon').classList.add('fa');
            document.querySelector('#favorite-icon').classList.remove('far');
            favoriteFacts.push(favoriteFacts[ID]);
        }
        localStorage.setItem('favoriteFacts', JSON.stringify(favoriteFacts));
    }
    
} 