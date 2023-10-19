let img;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let radius;
let nailCount = 100; // Number of nails

let nails = [nailCount];
let threads = [nailCount];

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
  GenerateThreads();

}

function draw() {
  DrawThreads();
}

function DrawThreads(){
  for(let i = 0; i < nailCount; i++){
    let startX = threads[i].startNail.x;
    let startY = threads[i].startNail.y;
    let endX = threads[i].endNail.x;
    let endY = threads[i].endNail.y;

    line(startX, startY, endX, endY);
  }
}

function GenerateThreads(){
  for(let i = 0; i < nailCount; i++){
    let highestScoreThread = new Thread(nails[0], nails[1]);    
    //console.log(highestScoreThread.threadScore);
    for(let j = 0; j < nailCount; j++){
      if(j <= i - 10 || j >= i + 10){
        let currentThread = new Thread(nails[i], nails[j]);
        currentThread.CalculateThreadScore(currentThread);
        if(currentThread.threadScore > highestScoreThread.threadScore){
          highestScoreThread = currentThread;
        }
      }
    }
    threads[i] = highestScoreThread;
  }
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
