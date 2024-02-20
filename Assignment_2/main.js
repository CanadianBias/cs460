/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Simple event listener to display debugging messages on page load ≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

window.addEventListener("load", confirmLoad);
function confirmLoad(){
    console.log("The page has successfully loaded. :)")
}
var timesClicked = 0;
function buttonClicked(){
    timesClicked++;
    document.getElementById("namebutton").innerHTML = "Elijah Dromarsky " + timesClicked;
}
function numSum(num1,num2){
    return num1 + num2;
}
function numProduct(num1,num2){
    return num1*num2;
}
function numDifference(num1,num2){
    return num1-num2;
}