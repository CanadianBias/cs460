/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/
var bibleBooks
// Example for fetch obtained from ChatGPT - "parsing external JSON file data to JS variable"
fetch('https://people.emmaus.edu/cs460/edromarsky/Assignment_5/bibleBooks.json')
            .then(response => {
                // Check if the fetch was successful
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Parse the body text as JSON
            })
            .then(data => {
                // `data` is now a JavaScript object
                bibleBooks = data; // Assigning parsed JSON to a variable
                populateDropdown();
                // Use `myData` however you need
                // console.log(bibleBooks); // Output the object to the console
            })
            .catch(error => {
                // If there's an error, log it
                console.error('Error fetching or parsing the data:', error);
            });
                
// populating select element in form 
// help obtained from ChatGPT - "creating a dropdown html form element from a JSON object"
// function call added by ChatGPT because of async nature of fetch - "inside this code, on line 37, the variable bibleBooks should have global scope but it is currently undefined"
function populateDropdown() {
    document.addEventListener('DOMContentLoaded', function () {
        const dropdown = document.getElementById('bibleBookDropdown'); // Get the select element by its ID
    
        // Iterate through each item in the JSON object
        bibleBooks.forEach(oBook => {
            const option = document.createElement('option'); // Create a new <option> element
            option.value = oBook.book; // Set the value attribute of the option
            console.log(option.value);
            option.textContent = oBook.book; // Set the display text of the option
            console.log(option.text);
            dropdown.appendChild(option); // Append the option to the select element
            
        });
    });
}

