let speedX = 3;
let speedY = 3;
let x = 0;
let y = 0;

function setup() {
  createCanvas(1024, 720);
  
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  circle(x, y ,25);
  if(x >= width - 13){
    speedX = -3;
  }
  else if(x <= 13){
    speedX = 3;
  }
  x += speedX;
  if(y >= height - 13){
    speedY = -3;
  }
  else if(y <= 13){
    speedY = 3;
  }
   y += speedY;
}