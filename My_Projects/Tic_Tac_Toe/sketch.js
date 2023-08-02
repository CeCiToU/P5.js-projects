let checker = false;
let counter = 0;
let winner = "circle";
function setup() {
  createCanvas(400, 400);
background(220);
for(let i = 50; i< width - 50; i+= 100){
    for(let j = 50; j< height- 50; j+=100){
      rect(i,j,100,100)
    }
  }
  strokeWeight(4);
}
if(winner == "circle"){
  checker = true;
}
else {
  checker = false;
}

function draw() {
  
}

function mousePressed(){
  if(counter <= 9){
  if(mouseX > 50 && mouseX < 150 && mouseY > 50 && mouseY < 150){
    if(checker){
      counter++;
      ellipse(100, 100,50, 50)
      checker = false;
      
    }
    else {
     counter++;
      line(65,65, 135, 135)
      line(135, 65, 65, 135)
      checker = true;
      
    }
  }
  else if(mouseX > 150 && mouseX < 250 && mouseY > 50 && mouseY < 150){
    if(checker){
    counter++;
    ellipse(200,100,50,50)
      checker = false;
    }
    else {
      counter++;
      line(165, 65, 235,135)
    line(235,65,165,135)
      checker = true;
    }
    
  }
  else if(mouseX > 250 && mouseX < 350 && mouseY > 50 && mouseY < 150){
    if(checker){
      counter++;
      
    ellipse(300,100,50,50)
      checker = false;
    }
    else {
      counter++;
      line(265,65, 335,135)
    line(335,65, 265, 135)
      checker = true;
    }
  }
  else if(mouseX > 50 && mouseX < 150 && mouseY > 150 && mouseY < 250){
    if(checker){
     counter++;
    ellipse(100,200,50,50)
      checker = false;
    }
    else {
      counter++;
       line(135, 165, 65,235)
    line(65, 165, 135,235)
      checker = true;
    }
  }
  else if(mouseX > 150 && mouseX < 250 && mouseY >150 && mouseY < 250){
    if(checker){
     counter++;
    ellipse(200,200,50,50)
      checker = false;
    }
    else {
      counter++;
       line(235,165, 165, 235)
    line(165, 165, 235, 235)
      checker = true;
    }
  }
  else if(mouseX > 250 && mouseX < 350 && mouseY > 150 && mouseY < 250){
    if(checker){
     counter++;
    ellipse(300,200,50,50)
      checker = false;
    }
    else {
      counter++;
       line(265, 165, 335, 235 );
    line(335, 165, 265,235);
      checker = true;
    }
  }  
  else if(mouseX >50 && mouseX < 150 && mouseY > 250 && mouseY < 350){
    if(checker){
      counter++;
    ellipse(100,300,50,50)
      checker = false;
    }
    else {
      counter++;
      line(65, 265, 135,335)
    line(135, 265, 65, 335)
      checker = true;
    }
  }
  else if(mouseX >150 && mouseX < 250 && mouseY > 250 && mouseY < 350){
    if(checker){
     counter++;
    ellipse(200,300,50,50)
      checker = false;
    }
    else{
      counter++;
       line(165, 265, 235,335)
    line(235, 265, 165, 335)
      checker = true;
    }
  }
  else if(mouseX >250 && mouseX < 350 && mouseY > 250 && mouseY < 350){
    if(checker){
    counter++;
    ellipse(300,300,50,50)
      checker = false;
    }else {
      counter++;
      line(265, 265, 335,335)
    line(335, 265, 265, 335)
      checker = true;
    }
  }
}
}