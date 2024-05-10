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
    // let result = countYZ(jsInputYZ.value);
    jsCountYZ_Result.innerHTML = "Number of Words Ending in Y or Z: " + countYZ(jsInputYZ.value).toString(); // error, converting function to string
    countSentences();
    countWords();
    generateWordList();
    plotWordHistogram();
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
                newOption.value = i/2;
                newOption.innerHTML = arrResponse[i];
                dropdown.appendChild(newOption);
            }
        }
    }
    xmlhttp.open("GET", URL);
    xmlhttp.send();
}

// Updates input box when dropdown item is selected
function changeDropdown() {
    const verseDropdown = document.getElementById("matt18");
    const jsInputYZ = document.getElementById("inputYZ");
    // Reference to currently selected option element
    const index = verseDropdown.selectedIndex;
    // Update text box
    jsInputYZ.value = verseDropdown.children[index].innerHTML
    // Force input box to run event listener function
    updateResultYZ();
}

// Updates input box with random verse selection
function chooseRandomVerse() {
    const verseDropdown = document.getElementById("matt18");
    const jsInputYZ = document.getElementById("inputYZ");
    jsInputYZ.value = verseDropdown.children[Math.floor(Math.random() * 35)].innerHTML;
    updateResultYZ();
}

// From W3 Schools - Cookies
// https://www.w3schools.com/js/js_cookies.asp

function saveFavoriteVerse() {
    const jsInputYZ = document.getElementById("inputYZ");
    const btnFavorite = document.getElementById("btnFavorite");
    const d = new Date();
    d.setTime(d.getTime() + (30*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = "favVerse" + "=" + jsInputYZ.value + ";" + expires + ";path=/";
    btnFavorite.value = "Favorite Verse Saved!";
    updateFavoriteVerseText();
}

function getVerseCookieString() {
    let name = "favVerse" + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function updateFavoriteVerseText() {
    const txtFavorite = document.getElementById("favoriteVerse");
    if (document.cookie != "") {
        txtFavorite.innerHTML = "Favorite Verse: " + getVerseCookieString();
    }
}

// ChatGPT3.5 Prompt - "Sentence count using RegEx in JS, be verbose."
function countSentences() {
    // Element references
    const jsInputYZ = document.getElementById("inputYZ");
    const txtSentence = document.getElementById("sentenceCount");
    var sentenceRegex = /[^.!?]+[.!?]+/g; // regex to filter by sentence demarkers
    var sentences = jsInputYZ.value.match(sentenceRegex); // compares input box against regex expression
    if (sentences) {
        txtSentence.innerHTML = "Sentence Count: " + sentences.length.toString();
    } else {
        txtSentence.innerHTML = "Sentence Count: 1";
    }
}

// ChatGPT3.5 Prompt - "Word count using RegEx, JavaScript, be verbose (no comments in code)"
function countWords() {
    // Element references
    const jsInputYZ = document.getElementById("inputYZ");
    const txtWord = document.getElementById("wordCount");
    // Regex to filter by word
    var wordRegex = /\b\w+\b/g;
    // Matching against text in input box
    var words = jsInputYZ.value.match(wordRegex);
    if (words) {
        txtWord.innerHTML = "Word Count: " + words.length.toString();
    } else {
        txtWord.innerHTML = "Word Count: 0";
    }
}

// ChatGPT3.5 Prompt - "Create alphabetized word list with no duplicates in JS (no comments, be more verbose)"
function generateWordList() {
    const jsInputYZ = document.getElementById("inputYZ");
    const alphabetizedList = document.getElementById("alphabetizedList");
    var words = jsInputYZ.value.match(/\b\w+\b/g);
    if (!words) {
        return;
    }
    var lowercaseWords = words.map(function(word) {
        return word.toLowerCase();
    });    
    var uniqueWords = [...new Set(lowercaseWords)];
    var sortedWords = uniqueWords.sort();
    for (let i = 0; i < sortedWords.length; i++) {
        let newListElement = document.createElement("li");
        newListElement.innerHTML = sortedWords[i];
        alphabetizedList.appendChild(newListElement);
    }
}

// ChatGPT3.5 Prompt - "a function that creates a dictionary of words and their frequencies in order to populate a word histogram using Plotly all in the same function, in JavaScript"
function plotWordHistogram() {
    Plotly.purge('wordHistogram');
    const jsInputYZ = document.getElementById("inputYZ");
    var words = jsInputYZ.value.match(/\b\w+\b/g);
    var wordFreq = {};
    words.forEach(function(word) {
        word = word.toLowerCase();
        wordFreq[word] = (wordFreq[word] || 0) + 1;
    });
    var sortedWords = Object.keys(wordFreq).sort(function(a, b) {
        return wordFreq[b] - wordFreq[a];
    });
    var topWords = sortedWords.slice(0, 50);
    var counts = topWords.map(function(word) {
        return wordFreq[word];
    });
    var trace = {
        x: topWords,
        y: counts,
        type: 'bar'
    };
    var layout = {
        title: 'Word Histogram',
        xaxis: { title: 'Word' },
        yaxis: { title: 'Frequency' }
    };
    Plotly.newPlot('wordHistogram', [trace], layout);
}

function main() {
    const verseDropdown = document.getElementById("matt18");
    const jsInputYZ = document.getElementById("inputYZ");
    const btnRandom = document.getElementById("btnRandom");
    const btnFavorite = document.getElementById("btnFavorite");
    // const jsCountYZ_Result = document.getElementById("countYZ_result");
    populateSelector("matt18", "https://people.emmaus.edu/cs460/Resources/matt18.php");
    jsInputYZ.addEventListener("input", updateResultYZ);
    verseDropdown.addEventListener("change", changeDropdown);
    btnRandom.addEventListener("click", chooseRandomVerse);
    btnFavorite.addEventListener("click", saveFavoriteVerse);
    window.addEventListener("load", updateFavoriteVerseText);
}

main()