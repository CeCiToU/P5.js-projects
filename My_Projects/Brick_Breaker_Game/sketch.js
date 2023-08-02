var bricks = [];
var ball;
var bar;
var start;

function preload() {
  BackgroundImage = loadImage("BackgroundImage.jpg")
  BallImage = loadImage("BallImage.png");
  BarImage = loadImage("Bar.png");
  BrickImage = loadImage("BrickImage.png");
  StartButtonImage = loadImage("StartButtonImage.png");
  GameOverImage = loadImage("GameOverImage.png");
}

function setup() {
  createCanvas(500, 400);
  for (var x = 0; x < width; x += 50)
    for (var y = 0; y < 200; y += 50) bricks.push(new Brick(x, y, BrickImage));
  for (var x = -25; x < width; x += 50)
    for (var y = 25; y < 200; y += 50) bricks.push(new Brick(x, y, BrickImage));
  ball = new Ball(width / 2, height / 2, BallImage);
  bar = new Bar(width / 2, BarImage);

  textAlign(CENTER);
  start = 0;
}

function draw() {
  if (ball.y < height) {
    background(190);
    BackgroundImage.resize(500,400);
    image(BackgroundImage,width/2,height/2)

    // Brick Display
    for (var i = 0; i < bricks.length; i++) {
      bricks[i].display();
      if (bricks[i].break() == 1) {
        ball.ydir *= -1;
        bricks.splice(i, 1);
      }
    }

    // Ball Functions
    if (start == 1) {
      ball.display();
      ball.bounce();
    }

    // Bar Functions
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) bar.x -= 4;
      else if (keyCode === RIGHT_ARROW) bar.x += 4;
    }
    bar.display();

    // Start the Game
    if (start == 0) StartButton();
  }
  else {
    imageMode(CENTER)
    GameOverImage.resize(500,400)
    image(GameOverImage,width/2,height/ 2)
  }
}

function StartButton() {
  stroke(76, 254, 0);
  fill(255);
  //rect(100, 250, 300, 100);
  StartButtonImage.resize(300, 100);
  image(StartButtonImage, 250, 300);
  textSize(20);
  fill(76, 254, 0);
  text("CLICK TO", 250, 280);
  textSize(40);
  text("START", 250, 330);
}

function mouseClicked() {
  if (mouseX > 100 && mouseX < 400 && mouseY > 250 && mouseY < 350) {
    start = 1;
    console.log("clicked start button")
  }
}
