let dartX, dartY;
let bulletHoles = [];
let circlesR = [];
let gamesList = [];
let diameter = 180;
let numCircles = 6;
let gameRunning = false;
let player1;
let player2;
let currentHit = 6;

function setup() {
  createCanvas(400, 400);
  player1 = new Player(0);
  player2 = new Player(0);
}

function draw() {
  if(gameRunning){
  background(0);
  drawDartTarget(width / 2, height / 2, diameter, numCircles);
  drawDart();
  drawBulletHoles();
  }
}

function drawDartTarget(x, y, diameter, numCircles) {
  let circleColor1 = color(255, 0, 0);
  let circleColor2 = color(255);
  let circleColors = [circleColor1, circleColor2];
  let circleSizeStep = diameter / numCircles;

  for (let i = numCircles; i >= 0; i--) {
    let circleColor = circleColors[i % 2];
    fill(circleColor);
    ellipse(x, y, circleSizeStep * i);
  }
}

function drawDart() {
  if (dartX !== undefined && dartY !== undefined) {
    noStroke();
    fill(0);
    ellipse(dartX, dartY, 10);
  }
}

function drawBulletHoles() {
  for (let i = 0; i < bulletHoles.length; i++) {
    let { x, y } = bulletHoles[i];
    fill(100);
    ellipse(x, y, 8);
  }
}

function mouseClicked() {
  if(gameRunning){
  if (dist(mouseX, mouseY, width / 2, height / 2) <= diameter / 2) {
    if(randomness()){
    shoot(0);
    }
  else {
    shoot(50);
      }
    }
  }
}

function shoot(r){
  this.r = r;
    
    // If the click is inside the dartboard
  
    //Newbie mode
    //dartX = mouseX;
    //dartY = mouseY;  
  
    //Easy mode
    //dartX = mouseX + random(r);
    //dartY = mouseY + random(r);
    
    //Hard mode
    dartX = mouseX - 15 + random(30) + random(r);
    dartY = mouseY - 15 + random(30) + random(r);
  
    //Expert
    //dartX = mouseX - 25 + random(50) + random(r);
    //dartY = mouseY - 25 + random(50) + random(r);

    // Check if the dart hit the dartboard
    let distanceToCenter = dist(dartX, dartY, width / 2, height / 2);
    if (distanceToCenter <= (diameter / 2) - 2) {
      // If the dart hit the dartboard, record the bullet hole position
      bulletHoles.push({ x: dartX, y: dartY });
      }
  
      currentHit = calculateCircleIndex(dartX, dartY, diameter, numCircles)
}

function getColor(x, y){
  this.x = x;
  this.y = y;
  let colors = get(x, y);
  
  if(colors[0] == 255 && colors[1] == 0) {
    return "r";
  }
  else if(colors[0] == 255 && colors[1] == 255){
    return "w";
  }
  
  return "NaN"
}

function randomness(){
  let ran = random(101);
  //console.log(ran);
  if(ran < 85){
    return true;
  }
  else {
    return false;
  }
}

function calculateCircleIndex(dartX, dartY, diameter, numCircles) {
  
  let circleSizeStep = diameter / numCircles / 2;
  let distanceToCenter = round(dist(dartX, dartY, width / 2, height / 2));
  let circleIndex = floor(distanceToCenter / circleSizeStep, 0);

  if (circleIndex >= numCircles) {
    circleIndex = numCircles - 1;
  }
  
  circleIndex = constrain(circleIndex, 0, numCircles - 1); 
  let clr = getColor(dartX,dartY);
    
  if(clr == "r" || clr == "w"){
            gamesList.push({ x: round(dartX), y: round(dartY), result: clr === 'r'  ? "r, " + (circleIndex + 1): 'w, ' + (circleIndex +1)});
  return circleIndex;
    
  }
}

function startGame() {
gameRunning = true;
}

function stopGame() {
gameRunning = false;
}

function clearDarts(){
  bulletHoles = [];
  fill(0);
  noStroke();
  rect(width / 5, height / 4, width - width / 3, height/ 2);
  console.log("cleared");
  drawDartTarget(width / 2, height / 2, diameter, numCircles);
  
}

function showGames() {
  let gameInfo = '';
  for (let i = 0; i < gamesList.length; i++) {
    let { x, y, result } = gamesList[i];
    gameInfo += `Throw ${i + 1}: X=${x}, Y=${y}, Result=${result}\n`;
  }
  alert(gameInfo || 'No games recorded yet!');
}

function game301() {
  player1.points = 300;
  player2.points = 300;
  let currentPlayer = player1;
  let remainingThrows = 3;
  let gameEnded = false; // Add a flag to track if the game has ended

  function nextTurn() {
    remainingThrows = 3;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    bulletHoles = [];
    currentHit = 6;
    redraw(); // Redraw the canvas to clear the darts
  }

  function checkWinCondition() {
    
    if (!gameEnded && currentPlayer.points == 0) { 
      fill(0);
      rect(0,0, width, height);
      textSize(32);
      fill (126);
      stroke(126);
      strokeWeight(2);
      let str = `Player ${currentPlayer === player1 ? 1 : 2} WON`;
      text(str, width / 5, height / 2);
      gameEnded = true; // Set the flag to true to prevent further checks
      gameRunning = false;
    }
  }

  function drawScore() {
    textSize(16);
    text(`Player 1 Score: ${player1.points}`, 10, 20);
    text(`Player 2 Score: ${player2.points}`, 10, 40);
  }

  function drawDartsRemaining() {
    textSize(16);
    text(`Darts Remaining: ${remainingThrows}`, 10, 60);
  }

  mouseClicked = function () {
    if (gameRunning && remainingThrows > 0 && !gameEnded) { // Check if the game is running, there are remaining throws, and the game hasn't ended
      if (dist(mouseX, mouseY, width / 2, height / 2) <= diameter / 2) {
        if (randomness()) {
          shoot(0);
        } else {
          shoot(50);
        }

        remainingThrows--;
        let currentPts = (currentHit - 6) * -5;

        if (remainingThrows === 2) {
          if (currentPts <= currentPlayer.points) {
            currentPlayer.SubtractPoints(currentPts);
            checkWinCondition();
          }
        } else if (remainingThrows === 1) {
          if (currentPts <= currentPlayer.points) {
            currentPlayer.SubtractPoints(currentPts);
            checkWinCondition();
          }
        } else if (remainingThrows === 0) {
          if (currentPts <= currentPlayer.points) {
            currentPlayer.SubtractPoints(currentPts);
            checkWinCondition();
          }
          nextTurn();
        }
      }
    }
  };

  draw = function () {
    if (gameRunning) {
      background(0);
      drawDartTarget(width / 2, height / 2, diameter, numCircles);
      drawDart();
      drawBulletHoles();
      drawScore();
      checkWinCondition(); // Check for a winner on each frame
      drawDartsRemaining();
    }
  };
}

function gameCountUp() {
  player1.points = 0;
  player2.points = 0;
  let currentPlayer = player1;
  let remainingThrows = 3;
  let gameEnded = false;
  
  
  
  function nextTurn() {
    remainingThrows = 3;
    currentPlayer = currentPlayer === player1 ? player2 : player1;
    bulletHoles = [];
    currentHit = 6;
    redraw(); // Redraw the canvas to clear the darts
  }
  
  function checkWinCondition() {

  if (!gameEnded && currentPlayer.points == 300) { 
      fill(0);
      rect(0,0, width, height);
      textSize(32);
      fill (126);
      stroke(126);
      strokeWeight(2);
      let str = `Player ${currentPlayer === player1 ? 1 : 2} WON`;
      text(str, width / 5, height / 2);
      gameEnded = true; // Set the flag to true to prevent further checks
      gameRunning = false;
    }
  }
  
  function drawScores() {
    //console.log("Scores drawn")
    textSize(16);
    fill(255);
    text(`Player 1 Score: ${player1.points}`, 10, 20);
    text(`Player 2 Score: ${player2.points}`, 10, 40);
  }

  function drawDartsRemaining() {
    textSize(16);
    text(`Darts Remaining: ${remainingThrows}`, 10, 60);
  }
  
  mouseClicked = function () {
    if (gameRunning && remainingThrows > 0 && !gameEnded) { // Check if the game is running, there are remaining throws, and the game hasn't ended
      if (dist(mouseX, mouseY, width / 2, height / 2) <= diameter / 2) {
        if (randomness()) {
          shoot(0);
        } else {
          shoot(50);
        }

        remainingThrows--;
        let currentPts = (currentHit - 6) * -5;

        if (remainingThrows === 2) {
            currentPlayer.AddPoints(currentPts);
            checkWinCondition();
        } else if (remainingThrows === 1) {
            currentPlayer.AddPoints(currentPts);
            checkWinCondition();
          
        } else if (remainingThrows === 0) {
            currentPlayer.AddPoints(currentPts);
            checkWinCondition();
          }
          nextTurn();
      }
    }
  };
  
  draw = function () {
    if (gameRunning) {
      background(0);
      drawDartTarget(width / 2, height / 2, diameter, numCircles);
      drawDart();
      drawScores();
      drawBulletHoles();
      checkWinCondition(); // Check for a winner on each frame
      drawDartsRemaining();
    }
  };
  
}




