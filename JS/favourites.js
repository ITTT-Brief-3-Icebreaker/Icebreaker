let getAllFavourites

getFavourites()

function renderFavourites() {
    console.log("hello")
    let favouritesContainer = document.querySelector(".favourites-container");
    favouritesContainer.innerHTML = "";

    for(let i = 0; i < getAllFavourites.length; i++){
        console.log("loop")
        let container = document.createElement('div')
        container.className = "jokes-back card";
        let next = document.createElement('div')
        next.id = "next";

        container.appendChild(next);
        
        let title = document.createElement("h3")
        title.id = "card-title";
        title.innerHTML = getAllFavourites[i].type

        let quote = document.createElement("p")
        quote.id = "quote";
        quote.className = "answer";
        if (getAllFavourites[i].type == "Jokes") {
            quote.innerHTML = getAllFavourites[i].entry.joke; 
        } else if (getAllFavourites[i].type == "Facts") {
            quote.innerHTML = getAllFavourites[i].entry.question + '<br> <br> A: ' +
            getAllFavourites[i].entry.correct_answer + '<br> <br> Incorrect Answers: ' + getAllFavourites[i].entry.incorrect_answers;
        }

        container.style = 'border-color: ' + getAllFavourites[i].color + ';';
        
        favouritesContainer.appendChild(container);
        next.appendChild(title);
        next.appendChild(quote);
    }

}

function getFavourites() {
    getAllFavourites = JSON.parse(localStorage.getItem('Favourites'));
}

renderFavourites();

// function renderCalendarHabits(){
//     var habitsContainer = document.getElementById("calendar-habits-container") // The main container that has all the calendar-icon-rows in it
//     habitsContainer.innerHTML = ""; // Empty the innerHTML of container
//     var habits = getAllHabits();
//     for(var i = 0; i<habits.length; i++){ // Loop through all habits in localStorage
//         const habit = habits[i];
//         var container = document.createElement('div')
//         container.className = "calendar-icon-rows";
//         var icon = document.createElement('div')
//         icon.className ="calendar-icon-container"
//         icon.id = habit.name;
//         icon.style.backgroundColor = habit.color;
//         icon.innerHTML = habit.icon;
//         container.appendChild(icon);
//         const doneDays = habit.dates[currentDate];
//         let isActiveMonth = doneDays==undefined ? false : true; // If the month exists in the 'dates' array in local storage 
//         const numOfDays = daysInMonth(currentDate);
//         for(var j = 0; j<31; j++){ // loop through all calendar-days
//             var day = document.createElement('div');
//             day.className = "calendar-day";
//             day.id = habit.name+"-"+j;
//             if(j+1>numOfDays){ // If the day does not exist in the calendar(ex: 29th Feb)
//                 day.classList.add("unavilable-day");
//             }else if(constYearToday+"-"+addZero(""+constMonthToday)+"-"+addZero(""+todayDate.getDate())<
//                     currentYear+"-"+addZero(""+currentMonth)+"-"+addZero(""+(j+1))){ // Checks if the day is in the future
//                 day.classList.add("future-day");
//             }
//             else{
//                 day.addEventListener("click", dayClick)
//                 if(isActiveMonth && doneDays.includes(""+j)){
//                     day.style.backgroundColor = habit.color; // Style the days that are selected
//                 }else{
//                     day.addEventListener("mouseenter", (elem)=>{
//                         elem.target.style.backgroundColor = habit.color.replace(')', ', 0.25)');
//                     })
//                     day.addEventListener("mouseleave", (elem)=>{
//                         elem.target.style.backgroundColor = ""
//                         elem.target.style.opacity = 1;
//                     })

//                 }
//                 // if(currentDate === constDateToday && todayDate.getDate() == j-1){
//                 //     day.classList.add("today-day");
//                 // }

//             }
//             container.appendChild(day);
//         }
//         habitsContainer.appendChild(container);
//     }
//     calendarIconButtons();
// }