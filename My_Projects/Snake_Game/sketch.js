let max = 0;
var s;
var scl = 20;
let food;
let img;
let img2;
let checker = true;
let check = true;
let gamePoints = 0;
let currentPoints = 1;

function preload() {
  up = loadImage("SnakeHeadUp.png");
  down = loadImage("SnakeHeadDown.png");
  left = loadImage("SnakeHeadLeft.png");
  right = loadImage("SnakeHeadRight.png");
  img2 = loadImage("MENU BAR.png");
  img = loadImage("SNAKE_GAME.jpg");
}

function PLAYAGAIN() {
   currentPoints = 1;
pickLocation();
  s = new Snake(up,down,left,right);
  s.move();
  s.show();
  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
  
}

function CLOSE_THE_GAME() {
  clear();
  gamePoints = 0;
  currentPoints = 0;
  checker = false;
}

function setup() {
  createCanvas(600, 600);
  s = new Snake();
  frameRate(10);
  pickLocation();
}

function pickLocation() {
  var cols = floor(width / scl);
  var rows = floor(height / scl);
  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function mousePressed() {
  s.total++;
  currentPoints++;
  if (mouseX > 0 && mouseX <= 150 && mouseY > 500) {
    PLAYAGAIN();
  } else if (mouseX > 450 && mouseX <= 600 && mouseY > 500) {
    CLOSE;
    CLOSE_THE_GAME();
  }
}

function draw() {
  if (checker) {
    background(0);
    for(let i = 0; i < height; i+=20){
    stroke(255);
    strokeWeight(0.1);
    line(i,0,i,height);
    line(0,i,width,i);
      stroke(0);
  }

    if (s.death()) {
      
      clear();
      background(0);
      img2.resize(600, 100);
      image(img2, 0, 500);
      img.resize(600, 500);
      image(img, 0, 0);
      textSize(32);
      text(currentPoints,202,570);
      if(gamePoints < currentPoints){
        gamePoints = currentPoints;
      }
      
      text(gamePoints, 370,570);
    } else {
      s.move();
      fill(255, 0, 100);
      rect(food.x, food.y, scl, scl);
      s.update();
      s.show();
      if (s.eat(food)) {
        currentPoints++;
        pickLocation();
      }
    }
  }
}
