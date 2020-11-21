var url_string = window.location.href;
var url = new URL(url_string);
var game = url.searchParams.get("game");
let quote = document.querySelector('#quote');
ID = 0; 
let facts = [];
let jokes = [];
if(game === 'joke') {
    jokes = JSON.parse(localStorage.getItem('Jokes')); 
    document.querySelector('#title').innerHTML = 'JOKE CARD';
} else if(game === 'fact') {
    facts = JSON.parse(localStorage.getItem('Facts'));
    document.querySelector('#title').innerHTML = 'FACT CARD';
}
function display() {
    if(game === 'joke') {
        quote.innerHTML = jokes[ID].joke;
    } else if(game === 'fact') {
        let html = `
        <h4 class='fact-title'>this Fact is ${facts[ID].correct_answer}</h4>
        ${facts[ID].question}
        `;
        quote.innerHTML = html;
        
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
