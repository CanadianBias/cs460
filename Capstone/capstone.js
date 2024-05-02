/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/
function countYZ(str) {

/* 
Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow"
(not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it.s
*/

    // Need to break strings into substrings based on spaces
    const arrSub = str.split(" ");
    let numYZ = 0;

// Check each substring if it ends in an y or z
    for (let i = 0; i < arrSub.length; i++) {
        if (arrSub[i].charAt(arrSub[i].length - 1) == "y" || arrSub[i].charAt(arrSub[i].length - 1) == "z") {
            numYZ+=1;
        }
    }
    return numYZ
}

function updateResultYZ() {
    const jsInputYZ = document.getElementById("inputYZ");
    const jsCountYZ_Result = document.getElementById("countYZ_result");
    jsCountYZ_Result.innerHTML = "Number of Words Ending in Y or Z: " + countYZ(jsInputYZ.value).toString; // error, converting function to string
}

function populateSelector(el, URL) { // populates the dropdown selector el with the lines of text found at URL
    // Use this link: https://people.emmaus.edu/cs460/Resources/matt18.php
    // Resource Referenced: https://www.w3schools.com/js/js_json_php.asp
    const dropdown = document.getElementById(el);
    const xmlhttp = new XMLHttpRequest();
    xmlhttp.onload = function() {
        const arrResponse = xmlhttp.responseText.split(/(\d+)/); // Divides up string by numbers, stores to array
        // Iterates over new array and creates child option elements with text
        for (let i = 2; i < arrResponse.length; i++) {
            if (i % 2 == 0) {
                const newOption = document.createElement("option");
                newOption.innerHTML = arrResponse[i];
                dropdown.appendChild(newOption);
            }
        }
    }
    xmlhttp.open("GET", URL);
    xmlhttp.send();
}

function main() {
    const jsInputYZ = document.getElementById("inputYZ");
    const jsCountYZ_Result = document.getElementById("countYZ_result");
    populateSelector("matt18", "https://people.emmaus.edu/cs460/Resources/matt18.php");
    jsInputYZ.addEventListener("input", updateResultYZ);
}

main()