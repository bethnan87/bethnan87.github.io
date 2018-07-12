var data, phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;


// // preload table data
// function preload() {
//   data = loadTable(
//     'data/windspeed7days.csv',
//     'csv',
//     'header');
// }

function setup() {
  createCanvas(600, 600);
  noStroke();
  text("Thursday 12 July", 50, 200);

  phase = 0;
  speed = 0.1;
  maxCircleSize = 35;
  numRows = 20;
  numCols = 14;
  numStrands = 2;

  colorA = color("red");
  colorB = color("white");
}

function draw() {
  background(58);
  phase = frameCount * speed;

  for (var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, QUARTER_PI);

    for (var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, QUARTER_PI);
      var x = map(col, 0, numCols, 50, width - 50);

      for (var row = 0; row < numRows; row += 1) {
        var y = height / 2 + row * 10 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * .75;
        var circleSize = sizeOffset * maxCircleSize;

        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
      }
    }
  }
}


//var maxCircleSize = 100
// var phase = 0, speed = 0.03;

// function setup() {
//   createCanvas(500, 500);
// }

// function draw() {
//   background("purple");
//   var x = width/2;
//   var y = height/2 + sin(phase) * 50;
//   phase = frameCount * speed;
//   var sizeOffset = (cos(phase) + 1) * 0.5;
//   var circleSize = sizeOffset * maxCircleSize;
//   ellipse(x, y, circleSize, circleSize);
// }
