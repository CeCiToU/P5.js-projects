let extraCanvas;
let x = 200;
let y = 200;
function setup() {
  createCanvas(400, 400);
  extraCanvas = createGraphics(400, 400);
  extraCanvas.clear();
  background(0);
}

function draw() {
  frameRate(1000000000000000000000000);
  background(0);
  //   if(mouseIsPressed){
  //     extraCanvas.frameRate(10);
  //     extraCanvas.fill(255,0,0);
  //     extraCanvas.noStroke();
  //     extraCanvas.circle(mouseX, mouseY, 50);

  // }
  let starX = random(width, 0);
  let starY = random(height, 0);
  extraCanvas.ellipse(starX, starY, 2);
  image(extraCanvas, 0, 0);
  rect(x, y, 5, 5);
  x += random(-2, 2);
  y += random(-2, 2);
}
