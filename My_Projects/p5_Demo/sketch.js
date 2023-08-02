function setup() {
  createCanvas(800, 800);
}

function draw() {
  frameRate(2);
  background(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  stroke(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  strokeWeight(random(0, 50));
  //background(220);
  rectMode(CENTER);
  fill(random(0, 255), random(0, 255), random(0, 255), random(0, 255));
  for (let i = 0; i < width + 1; i += width / 8) {
    for (let j = 0; j < height + 1; j += height / 8) {
      rect(i, j, width / 8, height / 8, 90, 0, 90, 0);
    }
  }
}
