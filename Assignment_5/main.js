/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

// Below function constructed with help from
// https://javascript.info/fetch

// array sourced from "https://gist.githubusercontent.com/bubblerun/a624de5b4fa8ff0980010054a7220977/raw/f74f24bc9b1fefb30d3657bc72dedb5266903dc5/array.js"
const stateArray = [ 'AL', 'AK', 'AS', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'DC', 'FM', 'FL', 'GA', 'GU', 'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MH', 'MD', 'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ', 'NM', 'NY', 'NC', 'ND', 'MP', 'OH', 'OK', 'OR', 'PW', 'PA', 'PR', 'RI', 'SC', 'SD', 'TN', 'TX', 'UT', 'VT', 'VI', 'VA', 'WA', 'WV', 'WI', 'WY' ];
let boolTable = new Array;
boolTable[9] = true;
let htmlTable = document.getElementById("entryTable");

// function that grabs the JSON file data and populates the dropdown with it
async function populateDropdown() {
    let response = await fetch("bibleBooks.json");
    //console.log(promise);
    if (response.ok) {
        let json = await response.json();
        // console.log(json);
        for (i=0;i<=66;i++) {
            document.getElementById("bibleBookDropdown").innerHTML += "<option value='" + json.books[i].book + "'>" + json.books[i].book + "</option>";
        }
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

    // appends the selection made of the favourite bible book to the object
    value['favouriteBibleBook'] = document.querySelector("select").value;
  
    //console.log({ value });
    //console.log(value)
    
    // populates table below form element
    htmlTable.innerHTML += "<tr>";
    htmlTable.innerHTML += "<td>" + value.firstName + "</td>" + "<td>" + value.lastName + "</td>" + "<td>" + value.address + "</td>" + "<td>" + value.city + "</td>" + "<td>" + value.state + "</td>" + "<td>" + value.zip + "</td>" + "<td>" + value.email + "</td>" + "<td>" + value.phone + "</td>" + "<td>" + value.birthday + "</td>" + "<td>" + value.favouriteBibleBook + "</td>" + "<td>" + value.note + "</td>";
    //htmlTable.innerHTML += "<td>" + value.lastName + "</td>";
    //htmlTable.innerHTML += "<td>" + value.address + "</td>";
    //htmlTable.innerHTML += "<td>" + value.city + "</td>";
    //htmlTable.innerHTML += "<td>" + value.state + "</td>";
    //htmlTable.innerHTML += "<td>" + value.zip + "</td>";
    //htmlTable.innerHTML += "<td>" + value.email + "</td>";
    //htmlTable.innerHTML += "<td>" + value.phone + "</td>";
    //htmlTable.innerHTML += "<td>" + value.birthday + "</td>";
    //htmlTable.innerHTML += "<td>" + value.favouriteBibleBook + "</td>";
    //htmlTable.innerHTML += "<td>" + value.note + "</td>";
    htmlTable.innerHTML += "</tr>";

}

// function that changes the background color of the element to indicate successful entry of data
function validateInputContents(event) {
    //console.log(event.target.id);
    let submitButton = document.getElementById("submitThisPlease");
    // array of booleans to check if all the inputs have been filled out correctly
    // reduces amount of typing by assigning temporary value
    let element = event.target;
    switch (element.id) {
        case 'firstName':
            if (element.value === "") {
                element.style.backgroundColor = "red";
                boolTable[0] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[0] = true;
            }
            break;
        case 'lastName':
            if (element.value === "") {
                element.style.backgroundColor = "red";
                boolTable[1] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[1] = true
            }
            break;
        case 'address':
            if (element.value === "") {
                element.style.backgroundColor = "red";
                boolTable[2] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[2] = true;
            }
            break;
        case 'city':
            if (element.value.length < 3) {
                element.style.backgroundColor = "red";
                boolTable[3] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[3] = true;
            }
            break;
        case 'state':
            if (stateArray.includes(element.value) === false) {
                element.style.backgroundColor = "red";
                boolTable[4] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[4] = true;
            }
            break;
        case 'zip':
            if (element.value.length < 5 || element.value.length > 10) {
                element.style.backgroundColor = "red";
                boolTable[5] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[5] = true;
            }
            break;
        // example for regex obtained online from
        // "https://www.w3resource.com/javascript/form/email-validation.php"
        case 'email':
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(element.value)) {
                element.style.backgroundColor = "green";
                boolTable[6] = true;
            } else {
                element.style.backgroundColor = "red";
                boolTable[6] = false;
            }
            break;
        case 'phone':
            if (element.value.length == 12) {
                element.style.backgroundColor = "green";
                boolTable[8] = true;
            } else {
                element.style.backgroundColor = "red";
                boolTable[8] = false;
            }
            break;
        case 'birthday':
            if (element.value === "") {
                element.style.backgroundColor = "red";
                boolTable[7] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[7] = true;
            }
            break;
        case 'note':
            if (element.value.length > 128) {
                element.style.backgroundColor = "red";
                boolTable[9] = false;
            } else {
                element.style.backgroundColor = "green";
                boolTable[9] = true;
            }
            break;
        default:
            console.log("That didn't work...");
            break;
    }

    function checkValidity(bool) {
        //console.log("Hey we checked and this element is true");
        return bool == true
    }
    // makes sure all elements are filled out
    if (boolTable.every(checkValidity) == true && boolTable.length == 10) {
        //console.log(boolTable);
        submitButton.removeAttribute("disabled");
        //console.log("You've regained your button privledges");
    }
}

const form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
// document.getElementById("firstName").addEventListener('keyup', validateInputContents);
// querySelectorAll code sourced from "https://flaviocopes.com/how-to-add-event-listener-multiple-elements-javascript/"
document.querySelectorAll('.reqIn').forEach(item => {
    item.addEventListener('keyup', validateInputContents);
});