function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES);
}

function draw() {
  background(0);
  translate(200, 200);
  
  //Rotates the clock -90 degrees so 12 o'clock can be at the top
  rotate(-90);

  
  //Takes current time
  let hr = hour();
  let mn = minute();
  let sc = second();

  strokeWeight(8);
  noFill();

 
  //Creates the arc of the seconds 
  stroke(255, 100, 150);
  let secondAngle = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, secondAngle);

  //Creates the arc of the minutes
  stroke(150, 100, 255);
  let minuteAngle = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, minuteAngle);

  //Creates the arc of the hours
  stroke(150, 255, 100);
  let hourAngle = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, hourAngle);

  
  //Creates the arrow of the seconds
  push();
  rotate(secondAngle);
  stroke(255, 100, 150);
  line(0, 0, 100, 0);
  pop();

  //Creates the arrow of the minutes
  push();
  rotate(minuteAngle);
  stroke(150, 100, 255);
  line(0, 0, 75, 0);
  pop();

  //Creates the arrow of the hours
  push();
  rotate(hourAngle);
  stroke(150, 255, 100);
  line(0, 0, 50, 0);
  pop();

  //Creates the point in the middle of the clock (on top of the arrows)
  stroke(255);
  point(0, 0);
  
  


  //Draws the clock's numbers
  fill(255);
  noStroke();
  let str = hr + ':' + mn + ':' + sc;
  rotate(90);
  textAlign(CENTER);
  text(str, 0, 190);


}