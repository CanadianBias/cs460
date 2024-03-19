class Entry {
    constructor(fn, ln, bd) {
        this.fn = fn;
        this.ln = ln;
        this.bd = bd.toString();
    }
}

// console.log(document.getElementById("entryForm").elements.firstName.value);
// Basic structure obtained from ChatGPT3.5 "process HTML DOM form data into JS object on submit"
function handleSubmit(e) {
    // Prevents default submission behaviour
    e.preventDefault();
    
    const form = e.target;
    
    const formElements = document.getElementById("entryForm").elements;
    
    // console.log(formElements);

    const thisEntry = new Entry(formElements[0].value, formElements[1].value, formElements[2].value);
    const thisJSON = JSON.stringify(thisEntry);

    // ChatGPT3.5 Prompts "Sending JSON string to server-side JSON file", "On the server side, use python, and use the fetch api instead"
    fetch('/save_json', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: thisJSON
    })
    .then(response => response.json())
    .then(data => {
        console.log(data.message); // Log the response from the server
    })
    .catch(error => {
        console.error('Error sending JSON data:', error);
    });

}

const form = document.getElementById("entryForm");
form.addEventListener('submit', handleSubmit);