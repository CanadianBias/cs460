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
    const myTable = document.getElementById("pieTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    const data = [{
        labels: xArray,
        values: yArray,
        type: "pie"
    }];

    const layout = {title: "Pie Graph with Data"};

    Plotly.newPlot("piePlot", data, layout);

}

function drawDonutPlotly() {
    const myTable = document.getElementById("pieTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    const data = [{
        labels: xArray,
        values: yArray,
        hole: .4,
        type: "pie"
    }];

    const layout = {title: "Donut Graph with Data"};

    Plotly.newPlot("donutPlot", data, layout);

}

function drawSineGraphs() {
 
    const xArray1 = [];
    const yArray1 = [];
    for (let x = 0; x < 10; x += 0.1) {
        xArray1.push(x);
        yArray1.push(Math.sin(x));
    }
    const xArray2 = [];
    const yArray2 = [];
    for (let x = 0; x < 10; x += 0.1) {
        xArray2.push(x);
        yArray2.push(Math.sin(2*x));
    }
    const data1 = [{x:xArray1, y:yArray1, mode:"lines"}];
    const data2 = [{x:xArray2, y:yArray2, mode:"lines"}];
    const layout = {title: "Two Sine Functions With Different Frequencies"};
    // const data = [data1, data2];
    Plotly.newPlot("sinePlot", data2, layout);
}

// initializing function calls
drawScatterCanvas();
drawLineCanvas();
drawBarPlotly();
drawPiePlotly();
drawDonutPlotly();
drawSineGraphs();

let inputList = document.querySelectorAll(".inputBox"); // when new input is recieved to tables, redraw graphs
for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("change", drawScatterCanvas);
    inputList[i].addEventListener("change", drawLineCanvas);
    inputList[i].addEventListener("change", drawBarPlotly);
    inputList[i].addEventListener("change", drawPiePlotly);
    inputList[i].addEventListener("change", drawDonutPlotly);
}
window.addEventListener("resize", drawBarPlotly); // needed as Plotly doesn't autoresize with window
window.addEventListener("resize", drawPiePlotly);
window.addEventListener("resize", drawDonutPlotly);
window.addEventListener("resize", drawSineGraphs);