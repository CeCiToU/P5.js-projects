var angle = 0;
var h;
var w = 35;

function setup() {
  createCanvas(800, 800, WEBGL);
  ortho(-width, width, -height, height, -500, 1500);
}

function draw() {
  background(0);
  normalMaterial();
  rotateX(-PI / 6);
  rotateY(PI / 4);

  translate(-width/2, -0, -width/2);

  var offset = 0;

  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      var d = dist(x, z, width / 2, height / 2);
			var offset = map(d, 0, width/2, 0, 3);
      translate(x, 0, z);
      h = map(sin(angle + offset), -1, 1, 100, 600);
      box(w, h, w);
      pop();    
    }
  }

  angle -= 0.05;
}