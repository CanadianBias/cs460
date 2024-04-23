function drawScatterCanvas() {
    const myTable = document.getElementById("canvasTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
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

function drawLineCanvas() {
    const myTable = document.getElementById("canvasTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(parseFloat(myTable.children[0].children[i].children[0].children[0].value));
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }
    
    const myCanvas = document.getElementById("secondCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing

    ctx.clearRect(0,0,myCanvas.width,myCanvas.height);

    // Adjusts orgin to be in the bottom right corner
    xMax = myCanvas.width - 5;
    yMax = myCanvas.height - 5;

    let slope = (yArray[yArray.length-1] - yArray[0]) / (xArray[xArray.length-1] - xArray[0]);
    let intercept = yArray[0] - (slope * xArray[0]);

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

    ctx.moveTo(5, yMax - intercept); 
    ctx.lineTo(xMax, 1/(xMax * slope + intercept)); // had to take inverse slope to reorient line
    ctx.strokeStyle = "black";
    ctx.stroke();

}

function drawBarPlotly() {
    const myTable = document.getElementById("barTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    const data = [{
        x: xArray,
        y: yArray,
        type: "bar",
        orientation: "v",
        marker: {color:"rgba(0,0,255)"}
    }];

    const layout = {title:"Graph Information"};

    Plotly.newPlot("barPlot", data, layout);

}

function drawPiePlotly() {
    
}

// initializing function calls
drawScatterCanvas();
drawLineCanvas();
drawBarPlotly();

let inputList = document.querySelectorAll(".inputBox"); // when new input is recieved to tables, redraw graphs
for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("change", drawScatterCanvas);
    inputList[i].addEventListener("change", drawLineCanvas);
    inputList[i].addEventListener("change", drawBarPlotly);
}
window.addEventListener("resize", drawBarPlotly); // needed as Plotly doesn't autoresize with window