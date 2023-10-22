let nailCount = 100; // Number of nails

let img;
let canvasWidth = window.innerWidth;
let canvasHeight = window.innerHeight;
let radius;

let nails = [nailCount];
let threads = [nailCount];

function preload(){
  // Loads in the variable
img = loadImage("round.png");
}

function setup() {
  // Creates canvas
  createCanvas(canvasWidth, canvasHeight);
  
  // Displays image on the canvas
  background(0);
  imageMode(CENTER);
  image(img, canvasWidth / 2, canvasHeight / 2);

  // Converts the image in black and white (gray scale)
  GenerateGrayScale();
  // Generates nails and draws them on the canva
  GenerateNails();
  // Generates threads between the nails
  threads = GenerateThreads();

}

function draw() {
  // Draws threads on the canvas
  DrawThreads();
}

function DrawThreads(){
  for(let i = 0; i < nailCount; i++){
    // Extract the coordinates of the start and end nails
    // Coordinates of the head nail
    let startX = threads[i].startNail.x;
    let startY = threads[i].startNail.y;
    // Coordinates of the tail nail
    let endX = threads[i].endNail.x;
    let endY = threads[i].endNail.y;

    // Thread line
    line(startX, startY, endX, endY);
  }
}

function OrderThreads(){

  // Order: starts from threads[0] and where it ends takes a thread that starts where this end and so on till
  // there isn't any that starts where the previous ends. Then we pick one random that hasn't been ordered yet till all are sorted

}

function GenerateThreads(){
  let scoredThreads = [nailCount];
  for(let i = 0; i < nailCount; i++){
    let highestScoreThread = new Thread(nails[0], nails[1]);    
    for(let j = 0; j < nailCount; j++){
      if(j <= i - 10 || j >= i + 10){
        let currentThread = new Thread(nails[i], nails[j]);
        let currentThreadScore = currentThread.CalculateThreadScore(currentThread)
        currentThread.threadScore = currentThreadScore;
        //console.log(currentThread.threadScore);
        if(currentThread.threadScore > highestScoreThread.threadScore){
          highestScoreThread = currentThread;
        }
      }
    }
    scoredThreads[i] = highestScoreThread;
    //console.log(highestScoreThread.threadScore);

  }
  return scoredThreads;
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
