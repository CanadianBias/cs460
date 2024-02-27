/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/
async function printText() {
    let response = await fetch("https://bible-api.com/john+3:16");
    //console.log(promise);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        //document.getElementById("testElement").innerHTML = json.text;
    } else {
        alert("HTTPS-Error: " + response.status);
    }
}

// This database works to populate the bible books and chapters, but it doesn't tell you how many verses are per chapter
// function that grabs the JSON file data and populates the dropdown with it
async function populateDropdown() {
    let response = await fetch("bibleBooks.json");
    //console.log(promise);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        for (i=0;i<=66;i++) {
            // Format for adding elements to select dropdown sourced from https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add
            let sel = document.getElementById("bibleBookDropdown"); // Creates a reference to HTML object
            
            let opt = document.createElement("option");
            opt.value = json.books[i].book;
            opt.text = json.books[i].book;
            
            sel.add(opt, null);
        }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

// function to create objects when data is submitted
// sourced from https://www.learnwithjason.dev/blog/get-form-values-as-json/
function handleSubmit(event) {
    event.preventDefault();
    
    const data = new FormData(event.target);
    
    // Do a bit of work to convert the entries to a plain JS object
    const value = Object.fromEntries(data.entries());
    
    //console.log({ value });
    //console.log(value)
    
}

let selectBook = document.getElementById("bibleBookDropdown");
function updateChapterDropdown() {
    // console.log("The event listener is working");
    // console.log(selectBook.value);
}

// async function calls
populateDropdown();
printText();

selectBook.addEventListener("change", updateChapterDropdown);

console.log(document.getElementById("bibleBookDropdown").value);