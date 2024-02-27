/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/
async function printText(strURL) {
    let source = strURL
    let response = await fetch(source);
    //console.log(promise);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        //document.getElementById("testElement").innerHTML = json.text;
    } else {
        alert("HTTPS-Error: " + response.status);
    }
}
printText("https://bible-api.com/jn%203:16");

// function buttonClicked() {

// }


// // This database works to populate the bible books and chapters, but it doesn't tell you how many verses are per chapter
// // function that grabs the JSON file data and populates the dropdown with it
// // Might not be very useful if using text inputs, unless there's some way to check against it
// async function populateBookDropdown() {
//     let response = await fetch("bibleBooks.json");
//     //console.log(promise);
//     if (response.ok) {
//         let json = await response.json();
//         console.log(json);
//         for (i=0;i<=66;i++) {
//             // Format for adding elements to select dropdown sourced from https://developer.mozilla.org/en-US/docs/Web/API/HTMLSelectElement/add
//             let sel = document.getElementById("bibleBookDropdown"); // Creates a reference to HTML object
            
//             let opt = document.createElement("option");
//             opt.value = json.books[i].book;
//             opt.text = json.books[i].book;
            
//             sel.add(opt, null);
//         }
//     } else {
//         alert("HTTP-Error: " + response.status);
//     }
// }

// // function to create objects when data is submitted
// // sourced from https://www.learnwithjason.dev/blog/get-form-values-as-json/
// function handleSubmit(event) {
//     event.preventDefault();
    
//     const data = new FormData(event.target);
    
//     // Do a bit of work to convert the entries to a plain JS object
//     const value = Object.fromEntries(data.entries());
    
//     //console.log({ value });
//     //console.log(value)
    
// }

// async function calls
// populateBookDropdown();

// let selectBook = document.getElementById("bibleBookDropdown");

// async function populateChapterDropdown() {
//     // Source referenced: https://www.geeksforgeeks.org/javascript-get-the-index-of-an-object-by-its-property/

//     // console.log("The event listener is working");
//     // console.log(selectBook.value);

//     let response = await fetch("bibleBooks.json");
//     //console.log(promise);
//     if (response.ok) {
//         let json = await response.json();
//         let prop = "book";
//         let val = selectBook.value;
    
//         let i = json.map(function (e) {
//             return e.book;
//         }).indexOf(val);
    
//         console.log(i);

//     } else {
//         alert("HTTP-Error: " + response.status);
//     }

// }


// selectBook.addEventListener("change", populateChapterDropdown);

// console.log(document.getElementById("bibleBookDropdown").value);