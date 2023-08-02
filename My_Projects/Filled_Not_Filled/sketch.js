function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);
  noFill();
  circle(width/2, height/2, 100);
  if(width/2 - 50 <= mouseX && mouseX <= width/2 + 50){
    if(height/2 - 50 <= mouseY && mouseY <= height/2 + 50){
      fill(255,0,200);
      circle(width/2, height/2, 100);
    }
  }
}