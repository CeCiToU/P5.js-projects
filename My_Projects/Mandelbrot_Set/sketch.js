// !!! WARNING !!!
// Check my github page https://github.com/CeCiToU/P5.js-projects for instructions (the README.md file)

let bounds = 2; // Higher number will make the Mandelbrot set appear more detailed
let iterator = 40 // Higher iterations make the Mandelbrot set appear sharper.
let scale = 2; // Initial zoom level for the Mandelbrot set.

let cenX = 0; // Where the Mandelbrot set will be drawn on the X axis
let cenY = 0; // Where the Mandelbrot set will be drawn on the Y axis

function setup() {
    offscreen = createGraphics(width, height);
  createCanvas(640, 360);

  noStroke();
  colorMode(HSB);

  drawBrot();
}

function draw() {
  let redraw = false;

  if (keyIsDown(LEFT_ARROW)) {
    cenX -= (0.5 * 1) / scale;
    redraw = false;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    cenX += (0.5 * 1) / scale;
    redraw = false;
  }
  if (keyIsDown(UP_ARROW)) {
    cenY -= (0.5 * 1) / scale;
    redraw = false;
  }
  if (keyIsDown(DOWN_ARROW)) {
    cenY += (0.5 * 1) / scale;
    redraw = false;
  }

  if (keyIsDown(73)) {
    scale += scale * 0.5;
    redraw = true;
  }
  if (keyIsDown(79)) {
    scale -= scale * 0.5;
    redraw = true;
  }

  if (redraw) {
    drawBrot();
  }
}

function pixelToPoint(x, y) {
  let p = createVector(
    (x - width / 2) * (4 / width) * (16 / (9 * scale)) + cenX,
    (y - height / 2) * (4 / height) * (1 / scale) + cenY
  );

  return p;
}

function calculatePoint(c) {
  let z0 = createVector(0, 0);
  let i = 0;
  let isIn = true;

  while (i < iterator && isIn) {
    z0 = createVector(z0.x * z0.x - z0.y * z0.y + c.x, 2 * z0.x * z0.y + c.y);
    i++;
    if (z0.mag() > bounds) {
      isIn = false;
    }
  }
  return { i: i, isIn: isIn };
}

function drawBrot() {
  for (let x = 0; x < width; x++) {
    for (let y = 0; y < height; y++) {
      let c = pixelToPoint(x, y);
      let result = calculatePoint(c);

      if (result.isIn) {
        set(x, y, color(0));
      } else if (result.i > 1) {
        set(
          x,
          y,
          color(150 + 200 - ((pow(result.i / 50, 0.5) * 200) % 255), 80, 100)
        );
      } else {
        set(x, y, color(50));
      }
    }
  }
  updatePixels();
}
