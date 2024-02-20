/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/
// console.log("The page is linked.")
// Variables to store current color of page/element
var pageColor = 0;
var elementColor = 0;
// variable to check whether the timer is on or off
var timerOn = 0;
// references to timer elements for ease of coding
const timerFace = document.getElementById("timerFace");
const timerButton = document.getElementById("ex-timer");
// timing variables
var minutes = 10;
var seconds = 0;

// Changes the 'ex-onload' element's contents when the page has loaded
function changeExOnload() {document.getElementById('ex-onload').innerHTML = "The page has successfully loaded.";}

// Displays the text of the contents of the "ex-onchange" input in another element below
function displayNewValue() {document.getElementById("displayHere").innerHTML = document.getElementById("ex-change").value;}

// Toggles the page color from light to dark
function changePageColor() {
    if (pageColor == 0) {
        document.body.style.backgroundColor = "#1c1a1a";
        document.body.style.color = "#e3e3e3";
        pageColor = 1;
    } else {
        document.body.style.backgroundColor = "#FFFFFF";
        document.body.style.color = "#000000";
        pageColor = 0;
    }
}

// Displays mouse coordinates in an element underneath when the "ex-hover" element is hovered over with the mouse
function displayMouseCoords(e) {
    let x = e.clientX;
    let y = e.clientY;
    document.getElementById("mouseCoords").innerHTML = "X: " + x + " // Y: " + y;
}

// Displays the keycode whenever a key is pressed with the tab open
function displayKeyCode(e) {
    let currentKey = e.keyCode;
    document.getElementById("ex-keydown").innerHTML = "Hex value of the key you press will go here: " + currentKey;
}

// Starts or stops the timer on clicking the "ex-timer" input button
function startTimer() {
    if (timerOn == 0) {
        timerOn = 1;
        minutes = 5;
        seconds = 0;
        timerFace.innerHTML = minutes + ":" + seconds;
        timerButton.value = "Click this button to stop the timer";
    } else {
        timerOn = 0;
        timerFace.innerHTML = "00:00";
        timerButton.value = "Click this button to start the timer";
    }
}

// Updates the timer face every second
function changeTimer() {
    if (timerOn == 1) {
        if (minutes == 0 && seconds == 0) {
            startTimer();
        } else if (seconds == 0) {
            minutes -= 1;
            seconds = 59;
        } else {
            seconds -= 1;
        }
        timerFace.innerHTML = minutes + ":" + seconds;
    }
}

// Toggles color of individual element "ex-click2" based on onclick event in HTML
function changeElementColor() {
    let currentButton = document.getElementById("ex-click2");
    if (elementColor == 0) {
        currentButton.style.backgroundColor = "red";
        currentButton.style.color = "black";
        elementColor = 1;
    } else {
        currentButton.style.backgroundColor = "black";
        currentButton.style.color = "red";
        elementColor = 0;
    }
}

// Event listeners for each of the functions above, event listeners also present in HTML elements
window.addEventListener('load', changeExOnload);
document.getElementById("ex-hover").addEventListener("mouseover", displayMouseCoords);
window.addEventListener("keydown", displayKeyCode);
window.setInterval(changeTimer, 1000);