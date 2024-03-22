/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

// Entries could be stored externally using the commented out portion
// Requires external Python file running on server to create server for fetch to push to savepoint

class Entry {
    constructor(fn, ln, bd, fl) {
        this.fn = fn;
        this.ln = ln;
        this.bd = bd.toString();
        this.fl = fl;
    }
}

let entryArray = [];
let tempList = [];

// console.log(document.getElementById("entryForm").elements.firstName.value);
// Basic structure obtained from ChatGPT3.5 "process HTML DOM form data into JS object on submit"
function handleSubmit(e) {
    // Prevents default submission behaviour
    e.preventDefault();
    
    const form = e.target;
    
    const formElements = document.getElementById("entryForm").elements;
    
    const newEntry = new Entry(formElements[0].value, formElements[1].value, formElements[2].value, tempList);
    entryArray.push(newEntry);

    const dropdown = document.getElementById('friendsDropdown');
    let newOption = document.createElement('option');
    newOption.value = newEntry.fn + " " + newEntry.ln;
    newOption.innerHTML = newEntry.fn + " " + newEntry.ln;
    dropdown.appendChild(newOption);

    tempList = [];

    // This section shows how an external persistent JSON file could store entries on the server, with Flask python server and JSON file
    // const newJSON = JSON.stringify(newEntry);
    // ChatGPT3.5 Prompts "Sending JSON string to server-side JSON file", "On the server side, use python, and use the fetch api instead"
    // fetch('/save_json', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: newJSON
    // })
    // .then(response => response.json())
    // .then(data => {
    //     console.log(data.message); // Log the response from the server
    // })
    // .catch(error => {
    //     console.error('Error sending JSON data:', error);
    // });

}

function updateTable() {
    const table = document.getElementById('entryTable');
    table.innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>DOB</th></tr><th>Friends List</th>"
    for (i=0;i<entryArray.length;i++) {
        let entry = entryArray[i];
        table.innerHTML += "<tr><td>" + entry.fn + "</td><td>" + entry.ln + "</td><td>" + entry.bd + "</td><td>" + entry.fl + "</td></tr>";
    }
}

function addFriend() {
    let selectedOption = document.getElementById('friendsDropdown').value;
    tempList.push(selectedOption);
}

function main() {
    const form = document.getElementById("entryForm");
    form.addEventListener('submit', handleSubmit);
    form.addEventListener('submit', updateTable);
    // form.addEventListener('submit', updateDropdown);
    document.getElementById('btnFriend').addEventListener('click', addFriend);
}

main();