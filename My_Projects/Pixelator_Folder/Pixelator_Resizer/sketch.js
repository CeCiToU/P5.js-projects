
let canvasWidth = 10000;
let canvasHeight = 4000;
let resizer = 300;
let imgString = 'Sunset.jpg';




let img;

function preload() {
  img = loadImage(imgString); 
}

function setup() {
  createCanvas(canvasWidth + resizer, canvasHeight + resizer );
}

function draw() {
  background(255);
  img.resize(canvasWidth + resizer - 300, canvasHeight + resizer);
   image(img, 0, 0);
}
