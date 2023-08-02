let bubbles = [];
function setup() {
  createCanvas(400, 400);
  // for (let i = 0; i < 10; i++) {
  //   let x = random(width);
  //   let y = random(height);
  //   let r = random(10, 50);
  //   bubbles[i] = new Bubble(x, y, r);
  // }
}

function draw() {
  frameRate(4);
  background(0);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move();
    bubbles[i].show();
  }

}

function mousePressed(){
  let bubble = new Bubble(mouseX,mouseY,random(10,50))
bubbles.push(bubble);
}

function mouseDragged(){
let bubble = new Bubble(mouseX,mouseY, random(10,50));
bubbles.push(bubble);

}

function keyPressed(){
  if(keyCode === UP_ARROW ){
    print("UP ARROW")
    let bubble = []
    bubbles = bubble;
  }
}

class Bubble {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  move() {
    this.x = this.x + random(-10, 10);
    this.y = this.y + random(-10, 10);
  }
  show() {
    stroke(255);
    strokeWeight(4);
    noFill();
    // noStroke();
    // fill(255,10)
    ellipse(this.x, this.y, this.r * 2);
  }
}
