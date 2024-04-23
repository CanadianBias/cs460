/* 
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Elijah Dromarsky ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ edromarsky@emmaus.edu ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Creating JS webpages for educational purposes ≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡ Intellectual Property of Elijah Dromarsky, All Rights Reserved ≡≡≡≡≡≡≡≡≡≡≡≡≡
≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡
*/

// Code needed for Google to use charts
google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawGooglePieChart);

// This function pulls from the Canvas Table, and draws points on a canvas based on the input in the table.
function drawScatterCanvas() {
    const myTable = document.getElementById("canvasTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        xArray.push(parseFloat(myTable.children[0].children[i].children[0].children[0].value)); // grabs value from table
        yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
    }
    
    const myCanvas = document.getElementById("thisCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing

    // clears screen to avoid just writing over the old canvas
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

// This function is similar to the above function, but draws a (very) rough linear line along with the data as well
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

// Draws Bar Graph from Bar Graph table using the Plotly.js library, with associated script tag in the HTML document
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

    // Writes the data from the arrays in a way that Plotly can understand it
    const data = [{
        x: xArray,
        y: yArray,
        type: "bar", // tells plotly to make it a bar graph
        orientation: "v", // vertical orientation for the bar graph
        marker: {color:"rgba(0,0,255)"}
    }];

    const layout = {title:"Graph Information"}; // sets graph title

    Plotly.newPlot("barPlot", data, layout); // creates graph

}

// Draws a Pie Graph from respective table using Plotly.js library
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

    // Writes the data from the arrays in a way that Plotly can understand it
    const data = [{
        labels: xArray,
        values: yArray,
        type: "pie" // tells plotly.js to make it a pie graph
    }];

    const layout = {title: "Pie Graph with Data"}; // sets graph title

    Plotly.newPlot("piePlot", data, layout); // creates graph

}

// Same  pie graph as above, just with a hole in the middle
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
        hole: .4, // adds the hole to make it a donut graph
        type: "pie"
    }];

    const layout = {title: "Donut Graph with Data"};

    Plotly.newPlot("donutPlot", data, layout);

}

// draws two sine functions with different frequencies using Plotly, not interactive with user but for demonstration
function drawSineGraphs() {
 
    const xArray1 = [];
    const yArray1 = [];
    for (let x = 0; x < 10; x += 0.1) {
        xArray1.push(x);
        yArray1.push(Math.sin(x)); // creates yArray as function of the xArray
    }
    const xArray2 = [];
    const yArray2 = [];
    for (let x = 0; x < 10; x += 0.1) {
        xArray2.push(x);
        yArray2.push(Math.sin(2*x));
    }
    const data1 = {x:xArray1, y:yArray1, mode:"lines"};
    const data2 = {x:xArray2, y:yArray2, mode:"lines"};
    const data = [ data1, data2 ]; // adds both functions to be able to be drawn
    const layout = {title: "Two Sine Functions With Different Frequencies"}; // title information
    Plotly.newPlot("sinePlot", data, layout);
}

function drawBarChart() {
    const myTable = document.getElementById("barTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    const myCanvas = document.getElementById("barCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing

    const barColors = "blue";

    // initializes new chart
    new Chart("barCanvas", {
        type: "bar",
        data: {
            labels: xArray,
            datasets: [{
                backgroundColor: barColors,
                data: yArray
            }]
          },
        options: {
            title: {
                display: true,
                text: "Chart.js Bar Graph"
            }
        }
      });
}

// Draws a Pie Chart with Chart.js
function drawPieChart() {
    const myTable = document.getElementById("pieTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    const myCanvas = document.getElementById("pieCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing
    const barColors = ["blue", "red", "green", "yellow", "brown", "orange", "purple", "grey"];

    // initializes new chart
    new Chart("pieCanvas", {
        type: "pie",
        data: {
          labels: xArray, // sets categories
          datasets: [{
            backgroundColor: barColors,
            data: yArray // assigns categories data
          }]
        },
        options: {
          title: { // title information
            display: true,
            text: "Chart.js Pie Graph"
          }
        }
      });

}

// this one below isn't working currently
function drawMultipleLinesChart() {
    const xValues = [100,200,300,400,500,600,700,800,900,1000];

    const myCanvas = document.getElementById("lineCanvas"); // grabs reference to HTML canvas element
    const ctx = myCanvas.getContext("2d"); // sets 2D context for graphing

    new Chart("lineCanvas", {
        type: "line",
        data: {
            labels: xValues,
            datasets: [{
                data: [860,1140,1060,1060,1070,1110,1330,2210,7830,2478],
                borderColor: "red",
                fill: false
            },{
                data: [1600,1700,1700,1900,2000,2700,4000,5000,6000,7000],
                borderColor: "green",
                fill: false
            },{
                data: [300,700,2000,5000,6000,4000,2000,1000,200,100],
                borderColor: "blue",
                fill: false
            }]
        },
        options: {
            legend: {display: false}
        }
    });
}

// Draws 3D pie chart
function drawGooglePieChart() {

    const myTable = document.getElementById("pieTable"); // grabs reference to table
    let xArray = [];
    let yArray = [];
    for (let i = 1; i < 9; i++) { // iterates through table rows and grabs value in text input, stores to array
        if (myTable.children[0].children[i].children[0].children[0].value != "" || myTable.children[0].children[i].children[1].children[0].value != "") {
            xArray.push(myTable.children[0].children[i].children[0].children[0].value);
            yArray.push(parseFloat(myTable.children[0].children[i].children[1].children[0].value));
        }
    }

    // Set Data
    let googleData = [];
    googleData.push(['Header', "Units"]);
    for (let i = 0; i < xArray.length; i++) {
        googleData.push([xArray[i], yArray[i]]);
    }

    const data = google.visualization.arrayToDataTable(googleData);

    // Set Options
    const options = {
        title: 'Google Chart Pie Graph',
        is3D: true
    };

    // Draw
    const chart = new google.visualization.PieChart(document.getElementById('googlePieChart'));
    chart.draw(data, options);
}


// This function mostly ripped from W3 Schools example
function drawD3Scatter() {
    // Set Dimensions
    const xSize = 500;
    const ySize = 500;
    const margin = 40;
    const xMax = xSize - margin*2;
    const yMax = ySize - margin*2;

    // Create Random Points
    const numPoints = 100;
    const data = [];
    for (let i = 0; i < numPoints; i++) {
        data.push([Math.random() * xMax, Math.random() * yMax]);
    }

    // Append SVG Object to the Page
    const svg = d3.select("#myPlot")
        .append("svg")
        .append("g")
        .attr("transform","translate(" + margin + "," + margin + ")");

    // X Axis
    const x = d3.scaleLinear()
        .domain([0, 500])
        .range([0, xMax]);

    svg.append("g")
        .attr("transform", "translate(0," + yMax + ")")
        .call(d3.axisBottom(x));

    // Y Axis
    const y = d3.scaleLinear()
        .domain([0, 500])
        .range([ yMax, 0]);

    svg.append("g")
        .call(d3.axisLeft(y));

    // Dots
    svg.append('g')
        .selectAll("dot")
        .data(data).enter()
        .append("circle")
        .attr("cx", function (d) { return d[0] } )
        .attr("cy", function (d) { return d[1] } )
        .attr("r", 3)
        .style("fill", "Red");
}

// initializing function calls
drawScatterCanvas();
drawLineCanvas();
drawBarPlotly();
drawPiePlotly();
drawDonutPlotly();
drawSineGraphs(); // this is not called when inputs are changed
drawBarChart();
drawPieChart();
drawLineCanvas(); // this is not called when inputs are changed
drawD3Scatter(); // called once

let inputList = document.querySelectorAll(".inputBox"); // when new input is recieved to tables, redraw graphs
for (let i = 0; i < inputList.length; i++) {
    inputList[i].addEventListener("change", drawScatterCanvas);
    inputList[i].addEventListener("change", drawLineCanvas);
    inputList[i].addEventListener("change", drawBarPlotly);
    inputList[i].addEventListener("change", drawPiePlotly);
    inputList[i].addEventListener("change", drawDonutPlotly);
    inputList[i].addEventListener("change", drawBarChart);
    inputList[i].addEventListener("change", drawPieChart);
    inputList[i].addEventListener("change", function() {google.charts.setOnLoadCallback(drawGooglePieChart);}); // short built-in function to redraw google chart
}
// needed as Plotly doesn't autoresize with window
window.addEventListener("resize", drawBarPlotly);
window.addEventListener("resize", drawPiePlotly);
window.addEventListener("resize", drawDonutPlotly);
window.addEventListener("resize", drawSineGraphs);