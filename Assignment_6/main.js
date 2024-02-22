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

// function that grabs the JSON file data and populates the dropdown with it
async function populateDropdown() {
    let response = await fetch("bibleBooks.json");
    //console.log(promise);
    if (response.ok) {
        let json = await response.json();
        console.log(json);
        // for (i=0;i<=66;i++) {
        //     document.getElementById("bibleBookDropdown").innerHTML += "<option value='" + json.books[i].book + "'>" + json.books[i].book + "</option>";
        // }
    } else {
        alert("HTTP-Error: " + response.status);
    }
}
populateDropdown();

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
printText();