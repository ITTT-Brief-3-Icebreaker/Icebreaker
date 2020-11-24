let ID = 0;
let pickupLinesHtml = document.getElementById("pickup-lines");
document.querySelector("#next_pickup-line").addEventListener("click", nextPickUpLine);





function nextPickUpLine() {
    ID++;

    displayPickUpLine()
    getPickupLines()
}

//     if (ID == jokes.length - 1) {
//         getQuotes()
//         ID = 0;
//     }
// };

// displayJoke();
let apiURL = "https://codeshifu-pickup-lines.glitch.me/api";
// let pickUpLines = "";

async function getPickupLines() {
    let response = await fetch(apiURL);
    pickUpData = await response.json();
    localStorage.setItem("pickUpLines", pickUpData.data[ID]);
    // .then (data => data.JSON()
    console.log(pickUpData.data[ID])


}


function displayPickUpLine() {
    document.getElementById("pickup-lines").innerHTML = localStorage.getItem("pickUpLines");
    console.log("display")
}
// getPickupLines()
// displayPickUpLine()