/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

// console log message to inform user what sorting commands are available to them
// used for debugging - commented out
// console.log("Sorting Methods Available:");
// console.log(" - Sort by Credit Score - sortByCreditScore()");
// console.log(" - Sort by Age - sortByAge() ");
// console.log(" - Sort by Length of Last Name - sortByLengthOfLastName()");

// initializes arrayOfPeople where People objects will be stored
// creates Date object to calculate ages based of current date
const arrayOfPeople = [];
const currentDate = new Date();

// This class will be used to create new people objects when the submit button is pressed
class Person {
    constructor(firstName,lastName,birthDate,age,gender,creditScore) {
        this.fn = firstName;
        this.ln = lastName;
        this.bd = birthDate;
        this.age = age;
        this.gender = gender;
        this.cs = parseInt(creditScore);
    }
    fullName() {
        console.log(this.fn + " " + this.ln);
    }
}

// ran when the submit button is clicked, adds new oPerson object to arrayOfPeople
function saveProfile() {
    let firstName = document.getElementById("firstName");
    let lastName = document.getElementById("lastName");
    let birthDate = document.getElementById("birthDate");
    let currentYear = parseInt(currentDate.getFullYear());
    let birthYear = parseInt(document.getElementById("birthDate").value.substr(0,4));
    let age = currentYear - birthYear;
    let creditScore = document.getElementById("creditScore");
    
    // block to check radio button checked status and assign gender based on the checked status
    let male = document.getElementById("male");
    let female = document.getElementById("female");
    let gender = "";
    if (male.checked == true) {
        gender = "Male";
    } else if (female.checked == true) {
        gender = "Female";
    }
    // console.log(gender);

    // error checking to ensure that all fields have been filled out before adding new person object
    if (firstName.value !== '' && lastName.value !== '' && birthDate.value !== '' && creditScore.value !== '') {
        let newPerson = new Person(firstName.value, lastName.value, birthDate.value, age, gender, creditScore.value);
        arrayOfPeople.push(newPerson);
        // alert("Submission Complete!");
        console.log(newPerson);
        console.log(arrayOfPeople);
        document.getElementById("peopleTable").innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Birth Date</th><th>Credit Score</th></tr>";
        arrayOfPeople.forEach(updateTable);
    } else {
        alert("There was an unexpected error submitting your form. Please ensure all fields have been filled out.");
    }
}

function updateTable(item, index) {
    let peopleTable = document.getElementById("peopleTable");
    peopleTable.innerHTML += "<tr><td>" + item.fn + "</td><td>" + item.ln + "</td><td>" + item.gender + "</td><td>" + item.bd + "</td><td>" + item.cs + "</td></tr>";
}

// updates age textbox div that appears underneath birthdate label and input after it has value
function updateAge() {
    let currentYear = parseInt(currentDate.getFullYear());
    let birthYear = parseInt(document.getElementById("birthDate").value.substr(0,4));
    document.getElementById("age").innerHTML = "Age: " + (currentYear - birthYear);
    // console.log(birthYear);
}

// updates little span next to credit score label and input to display numeric value for credit score
function updateCreditScore() {
    document.getElementById("spanCredit").innerHTML = document.getElementById("creditScore").value;
}

// puts every person's first name into a string using a for in loop
// makes all people friends :)
function everybodyInThisFormAreFriends() {
    let message = "";
    for (let index in arrayOfPeople) {
        message += arrayOfPeople[index].fn + " and ";
    }
    message += "everyone are friends!";
    console.log(message);
}

// sorts the array of people submitted by their credit score
function sortByCreditScore() {
    arrayOfPeople.sort((a, b) => a.cs - b.cs);
    document.getElementById("peopleTable").innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Birth Date</th><th>Credit Score</th></tr>";
    arrayOfPeople.forEach(updateTable);
}

// sorts the array of people submitted by their age
function sortByAge() {
    arrayOfPeople.sort((a, b) => a.age - b.age);
    document.getElementById("peopleTable").innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Birth Date</th><th>Credit Score</th></tr>";
    arrayOfPeople.forEach(updateTable);
}

// sorts array of people by the length of their last name
function sortByLengthOfLastName() {
    arrayOfPeople.sort((a, b) => a.ln.length - b.ln.length);
    document.getElementById("peopleTable").innerHTML = "<tr><th>First Name</th><th>Last Name</th><th>Gender</th><th>Birth Date</th><th>Credit Score</th></tr>";
    arrayOfPeople.forEach(updateTable);
}