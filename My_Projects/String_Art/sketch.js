let img;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let radius;
let nailCount = 100; // Number of nails

let nails = [nailCount];

function preload(){
img = loadImage("round.png");
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  
  background(0);
  imageMode(CENTER);
  image(img, canvasWidth / 2, canvasHeight / 2);

  GenerateGrayScale();
  GenerateNails();
}

function draw() {
 
  
}

function GenerateStrings(){
  
}

function GenerateNails(){
  
  let centerX = width / 2; // Center of the canvas
  let centerY = height / 2;
  if(img.height < img.width){
    radius = img.height / 2; // Radius of the circle
  }
  else {
    radius = img.width / 2
  }

  for (let i = 0; i < nailCount; i++) {

    // Calculate the position of each nail around the circle
    let angle = map(i, 0, nailCount, 0, TWO_PI);
    let x = centerX + cos(angle) * radius;
    let y = centerY + sin(angle) * radius;

    // Saves the position of the current Nail so later can be used
    let currentNail = new Nail(x, y);
    nails[i] = currentNail;

    // Draw a nail at the calculated position
    ellipse(x, y, 10, 10);
  }
}

function GenerateGrayScale(){
  loadPixels();
  const startPixel = (canvasHeight / 2 - img.height / 2) * 4;
  for (let i = startPixel; i < pixels.length; i += 4) {
    const gray = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    pixels[i] = gray;
    pixels[i + 1] = gray;
    pixels[i + 2] = gray;
  }
  updatePixels();
}
