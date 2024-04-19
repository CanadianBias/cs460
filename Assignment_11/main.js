function drawCanvas() {
    const myTable = document.getElementById("entryTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 8; i++) { // iterates through table rows and grabs value in text input, stores to array
        xArray.push(parseFloat(myTable.children[0].children[i].children[0].children[0].value));
        yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
    }
    
    const myCanvas = document.getElementById("thisCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);

    // Adjusts orgin to be in the bottom right corner
    xMax = myCanvas.width - 5;
    yMax = myCanvas.height - 5;

    // Draws some basic gridlines
    ctx.beginPath();
    ctx.moveTo(5,yMax);
    ctx.lineTo(5,5);
    ctx.moveTo(5,yMax);
    ctx.lineTo(xMax,yMax);
    ctx.stroke();

    // Draws small squares for plot points
    ctx.fillStyle = "red";
    for (let i = 0; i < xArray.length-1; i++) {
        let x = xArray[i] + 5;
        let y = yMax - yArray[i];
        ctx.beginPath();
        ctx.rect(x,y,3,3);
        ctx.fill();
    }

}
drawCanvas();

let inputList = document.querySelectorAll(".inputBox");
for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("change", drawCanvas);
}