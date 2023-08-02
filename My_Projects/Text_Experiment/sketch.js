let tickerText = "This is a text ticker example. "; // The text to be scrolled
let tickerX; // X position of the ticker text
let tickerSpeed = 2; // Speed of scrolling

function setup() {
  createCanvas(400, 100);
  tickerX = width; // Start the text at the right edge of the canvas
}

function draw() {
  background(220);
  drawTicker();
}

function drawTicker() {
  tickerX -= tickerSpeed; // Move the ticker text to the left

  // If the text goes off the left edge of the canvas, reset its position to the right edge
  if (tickerX < -textWidth(tickerText)) {
    tickerX = width;
  }

  fill(0);
  stroke(0); // Set the stroke color to black
  strokeWeight(5); // Set the thickness of the text stroke
  textSize(32);
  text(tickerText, tickerX, height / 2);
}
