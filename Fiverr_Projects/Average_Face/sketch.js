var video;
vScale = 10;

var particle = [];

function setup() {
  createCanvas(540, 360);
  pixelDensity(1);
  video = createCapture(VIDEO);
  video.size(width/vScale, height/vScale);
  video.hide();
  for (var i =0; i <5; i++){
  particle[i] = new Particle(width/2,height/2);
  }
  background(100);
}

function draw() {
  background(100,5);
  image(video,0,0,width,height);
  tint(255,255,255,15)
  video.loadPixels();
  for (var i = 0; i < particle.length; i++){
  particle[i].update();
  particle[i].show();
  }
}

function Particle(x,y) {
  this.x = x;
  this.y = y;
  
  this.update = function() {
    this.x += random(-10,10);
    this.y += random(-10,10);
    
    this.x = constrain(this.x, 0,width);
    this.y = constrain(this.y, 0,height);
  }
  
  this.show = function() {
    var px = floor(((this.x+mouseX*2)/3) / vScale);
    var py = floor(((this.y+mouseY*2)/3) / vScale);
    var col = video.get(px, py);
    stroke(col[0],col[1],col[2],200);
    strokeWeight(2);
    //rect(this.x, this.y, 10, 10);
    //line(mouseX, mouseY, this.x, this.y);
    
  }
  
}