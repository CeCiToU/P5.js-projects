function setup() {
  createCanvas(400, 400);
 
 }

function draw() {
  background(220);
 for(let i = 0; i < width; i+=10){
    for(let j = 0; j < height; j+=10){
      // fill(random(255));
      // fill(random(j), random(i), random(j));
      fill(random(mouseX),random(mouseY),random(mouseY));
      rect(i,j,10,10);
    }
  }
}