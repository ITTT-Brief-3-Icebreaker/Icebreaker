let ID = 0;
let pickupLinesHtml = document.getElementById("pickup-lines");
document.querySelector("#next_pickup-line").addEventListener("click", nextPickUpLine);





function nextPickUpLine() {
    ID++;

    displayPickUpLine()
}

//     if (ID == pickUpLinesKey.length - 1) {
// getPickupLines()
//         ID = 0;
//     }
// };

// displayJoke();
let apiURL = "https://codeshifu-pickup-lines.glitch.me/api";
// let pickUpData = "";

async function getPickupLines() {
    let response = await fetch(apiURL);
    pickUpData = await response.json();
    localStorage.setItem("pickUpLines", pickUpData.data[ID]);
    // .then (data => data.JSON()
    console.log(pickUpData.data[ID])


}

// let pickUpLines = localStorage.getItem("pickUpLinesKey")
function displayPickUpLine() {
    document.getElementById("pickup-lines").innerHTML = localStorage.getItem("pickUpLines");
    console.log("display")
}
getPickupLines()

// displayPickUpLine()
// getPickupLines()
// displayPickUpLine()