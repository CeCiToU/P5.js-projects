let maxPoints = 0;
let speedX = 0;
let speedY = 0;
let x;
let y;
let extraCanvas;
let currentPoints = 0;

function setup() {
  createCanvas(600, 400);
  extraCanvas = createGraphics(600, 400);
  extraCanvas.background(255, 219, 98);
  x = width / 2;
  y = height / 2;
}

function draw() {
  noCursor();
  let strPoint = "Points: " + currentPoints;
  let bestResult = "Best Result: " + maxPoints;

  extraCanvas.background(255, 219, 98);
  let str = "GAME OVER";
  extraCanvas.textSize(36);
  extraCanvas.textAlign(CENTER, BOTTOM);
  extraCanvas.text(str, width / 2, height / 2 - 50);
  extraCanvas.textSize(24);
  extraCanvas.textAlign(CENTER,TOP);
  extraCanvas.text(strPoint, width/2, height/2 - 40);
  extraCanvas.textAlign(CENTER,TOP);
  extraCanvas.text(bestResult, width/ 2, height / 2);   

  background(255, 219, 98);
  fill(0,0,0,40);
  textSize(42)
  text(strPoint, width / 2 - 70, height / 2 + 20);
  stroke(0);
  strokeWeight(8);
  fill(0);
  
  line(10, mouseY - 40, 10, mouseY + 40);
  line(width - 10, mouseY - 40, width - 10, mouseY + 40);
  noStroke();
  circle(x, y, 25);
  if (y >= height - 25) {
    speedY = -3;
  } else if (y <= 0) {
    speedY = 3;
  }

  if (x + 1 == 25) {
    if (y <= mouseY + 40 && mouseY - 40 <= y) {
      speedX = 3;
      currentPoints = currentPoints + 1;
    }
  } else if (x + 2 == width - 25) {
    if (y <= mouseY + 40 && mouseY - 40 <= y) {
      speedX = -3;
      currentPoints = currentPoints + 1;
    }
  }
  if(maxPoints < currentPoints) {
    maxPoints = currentPoints;
  }
  x += speedX;
  y += speedY;
  if (x > width + 15 || x < -15) {
    cursor();
    speedX = 0;
    speedY = 0;
  }
  if (speedX == 0) {
    rectMode(CENTER);
    extraCanvas.rect(width / 2 - 105, height / 2 + 50, 215, 50);
    extraCanvas.text("Play Again", width / 2, height / 2 + 62);
    image(extraCanvas, 0, 0);
  }
}

function mousePressed(){
  points = 0;
  if(mouseY >= height / 2 + 50 && mouseY <=height / 2 + 100){
    if(mouseX >= width / 2 - 105 && mouseX <= width / 2 + 115){
      extraCanvas.clear();
      x = width /2;
      y = height / 2;
      speedX = -3;
      speedY = 3;
      currentPoints = 0;
    }
  }
}

