// !!! WARNING !!!
// Change the following params depending on your preferences !!!

var canvasWidth = 1200; // Canvas width!
var canvasHeight = 1200; // Canvas height!
var minWave = 150; // Min radius of the circle!
var maxWave = 350; // Max radius of the circle!
var blurValue = 2; // Blur value for the whole canvas!
var amplitude = 230; // Amplitude (lower = more unstable picture; higher = more stable picture)!
var alphaFade = 0.8; // Smoothing factor goes from 0 to 1 (0.8 default)!
var img;
var imageString = "EveningSun.jpg"; // Image string text!
var song;
var songString = "EveningSun.mp3"; // Song string text!
var fft;
var wave;
var amp;
var particle;
var particles = [];

function preload() {
  img = loadImage(imageString);
  song = loadSound(songString);
}

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  angleMode(DEGREES);
  imageMode(CENTER);
  rectMode(CENTER);
  fft = new p5.FFT(alphaFade);
  song.play();

  img.filter(BLUR, blurValue);
}

function draw() {
  background(0);
  stroke(255);
  strokeWeight(3);
  noFill();

  translate(canvasWidth / 2, canvasHeight / 2);

  wave = fft.waveform();
  fft.analyze();
  amp = fft.getEnergy(20, 200);

  imageRotator(); // Rotates the image when the amp is higher than amplitude!

  alphaBlur(); // Black blur over the whole canvas!

  halfCircle(-1); // left side of the circle!
  halfCircle(1); // right side of the circle!
  loadParticles(); // particles around the circle!
}

function loadParticles() {
  particle = new Particle();
  particles.push(particle);

  for (let i = particles.length - 1; i > 0; i--) {
    if (particles[i].edges) {
      particles[i].update(amp > amplitude);
      particles[i].show();
    } else {
      particles.splice(i, 1);
    }
  }
}

function halfCircle(side) {
  //stroke(amp); // For dynamic circle stroke!
  stroke(255); // For static circle stroke!
  noFill(); // Comment if the circle has to filled!
  beginShape();
  for (let i = 0; i <= 180; i++) {
    var index = floor(map(i, 0, width, 0, wave.length - 1));

    var r = map(wave[index], -1, 1, minWave, maxWave);

    var x = r * side * sin(i);
    var y = r * cos(i);
    vertex(x, y);
  }
  endShape();
}

function stopWaveform() {
  if (song.isPlaying() == true) {
    song.pause();
    noLoop();
  } else {
    song.play();
    loop();
  }
}

function mouseClicked() {
  stopWaveform();
}

function imageRotator() {
  // Comment out the push() and pop() functions to only rotate the image!

  //push();
  if (amp > amplitude) {
    rotate(random(-0.5, 0.5));
  }
  image(img, 0, 0, width, height);
  //pop();
}

function alphaBlur() {
  var alpha = map(amp, 0, 255, 180, 150);
  fill(0, alpha);
  noStroke();
  rect(0, 0, width, height);
}
