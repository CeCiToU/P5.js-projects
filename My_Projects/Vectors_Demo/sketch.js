let mover;

function setup() {
  createCanvas(400, 400);
  mover = new Mover(0,0)
}

function draw() {
  //translate(width / 2, height / 2);
  background(0);
  mover.update();
  mover.show();
}
