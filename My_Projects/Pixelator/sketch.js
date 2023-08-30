
//!!!!!! BEFOR USING   !!!!!!!!!
// Change the img params in the preload();
// Change the size of the canvas based on the picture for better result
// Change the resize() of the image in the setup()
// Change the size of the pixels based on what you want (will be 'fixed in place' when compared with diamonds in real life!)
//
// For more precise adjustment check sketch => Pixelator Resizer
//

let canvasWidth = 12700;
let canvasHeight = 6700;
let resizer = 300;
let imgString = 'Sunset.jpg';
let size = 100; // element size
let spaceForLegend = 300;


//let size = 7;
//let size = floor(map(mouseX, 0, canvasWidth, 7, 40)); 
// maps mouseX value to element size


let img; // creates image variable
let startx = 0 // starting x coordinate
let starty = 0 // starting y coordinate
let pixelColor = [];
let colorArray = [];
let myBlur;
let filtered;
let pixelsGrid;
let i = 0;
let legendArray = [];
let charArray;




function preload() {
  img = loadImage(imgString);
}

function setup() {
  frameRate(1);
  
  pixelsGrid = ((canvasWidth + resizer) / size) * ((canvasHeight + resizer) / size);
  
  charArray = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
  'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z',
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
  'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
  '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'
];

  
  createCanvas(canvasWidth + resizer, canvasHeight + resizer ); // creates canvas
  
  myBlur = new DMCpalette();
  
  img.loadPixels(); // loads image
  img.resize(canvasWidth + resizer - spaceForLegend, canvasHeight + resizer); // resizes image to window size
  img.updatePixels(); // updates image
  
}

function draw() { 
    Pixelator();  
    DrawColorArray();
}

function keyPressed(){
  if(key == "s"){
    saveCanvas("PixeledImage", "jpg");
    
      console.log("Image saved !!!");

  }
  
}

function Pixelator(){
  clear();
  background(0);
  
  //console.log(size);
  
  
  for (var starty = 0; starty < img.height; starty++) { // creates pixel index
    for (var startx = 0; startx < img.width; startx++) {
      var index = (startx + starty * img.width) * 4;
      var r = img.pixels[index + 0];
      var g = img.pixels[index + 1];
      var b = img.pixels[index + 2];

      // var bright = ((0.3 * r) + (0.59 * g) + (0.11 * b)) 
      // sets pixel value to adjusted grayscale

       noStroke(); // disables element stroke

      
      //// FOR 4-BIT IMAGE (only black and white)
      // ---------

      // if (bright < 63.75) {
      //   fill(0);
      // } else if (bright >= 63.75 && bright < 127.5) {
      //   fill(85);
      // } else if (bright >= 127.5 && bright <= 191.25) {
      //   fill(170);
      // } else if (bright >= 191.25 && bright <= 255) {
      //   fill(255);
      // }
      
      // ---------
      ////

      
      
      // fill(bright);
      fill(r, g, b) 

      rect(startx, starty, size, size)
      
      startx = startx + size -1 // set new startx value
    }
    starty = starty + size -1 // set new starty value
  }
  console.log("Image pixelated !!!");
  GetColor();
}

function GetColor(){
  if(keyIsDown(LEFT_ARROW) && colorArray.length < pixelsGrid){
    for(var i = size / 2; i <= canvasHeight  + resizer; i += size){
      for(var j = size / 2; j <= canvasWidth + resizer; j += size){
        pixelColor = get(j, i);
        let color = new Color(null,null,pixelColor[0], pixelColor[1], pixelColor[2]);
        colorArray.push(color);
        circle(j, i, 3);
      }
    }
    
    console.log("Colors copied !!!");
    
    colorArray = DMCColor(colorArray);

    }
}

function DrawColorArray() {
  
  if (keyIsDown(RIGHT_ARROW) && i <= pixelsGrid - 1) {
    
    for (let y = 0; y < canvasHeight + resizer; y += size) {

      for (let x = 0; x < canvasWidth + resizer; x += size) {
       
        fill(colorArray[i].r, colorArray[i].g, colorArray[i].b);
        rect(x, y, size, size);
        i++;
      }
    }
    Distinct();
    
    console.log("Converted image drawn !!!");
        noLoop();
  }
  
}

function Distinct(){
  let currentColor;
  
  legendArray.push(colorArray[0]);
    
  for(let i = 1; i < colorArray.length; i++){
    
    currentColor = colorArray[i];
    
    for(let j = 0; j < legendArray.length; j++){
      
      if(!containsColor(currentColor, legendArray)){
        
        legendArray.push(currentColor);
        break;
        
      } 
    } 
  }
  
  console.log("Color array distincted !!!");
  
  legendArray = bubbleSort(legendArray);
  
  GenerateLetters();
}

function containsColor(targetColor, colorsArray) {
  for (let i = 0; i < colorsArray.length; i++) {
    if (colorEquals(targetColor, colorsArray[i])) {
      return true;
    }
  }
  return false;
}

function colorEquals(c1, c2) {
  return c1.r === c2.r && c1.g === c2.g && c1.b === c2.b;
}

function GenerateLetters(){
  
  for (let i = 0; i < legendArray.length; i++) {
  legendArray[i].letter = random(charArray);
  charArray = charArray.filter(item => item !== legendArray[i].letter);
}
  
  console.log("Letters generated !!!");
  
  DrawLegend();
}

function bubbleSort(arr) {
    let n = arr.length;
  
    for (let i = 0; i < n - 1; i++) {
      
      for (let j = 0; j < n - i - 1; j++) {
      
        if (arr[j].dmc > arr[j + 1].dmc) {
        
          // Swap elements if they are in the wrong order
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
  
  console.log("Legend array sorted !!!")
    return arr;
  }

function DrawLegend(){
  
  stroke(0);
  strokeWeight(5);
  fill(255);
  rect(canvasWidth + resizer - spaceForLegend, 0, spaceForLegend, canvasHeight + resizer);
  
  let j = 0;
  let x = canvasWidth + 75;
  let y = 40;
  for (let i = 0; i < legendArray.length; i++) {
    
    let str = legendArray[i].dmc + " => " + legendArray[i].letter
    
    textSize(23);
    fill(0);
    noStroke();
    text(str, x + 35, y - 5, 120, 60);
    text(i + ".", x - 40, y + 15);
    
    console.log(legendArray.length);
    
    fill(legendArray[i].hx); // Set the fill color to black
    strokeWeight(2);
    rect(x, y - 5, 20, 20);
    
    
    y += 40;
  }
  
  let imgWidth = (canvasWidth + resizer - spaceForLegend) / size;
  let imgHeight = (canvasHeight + resizer) / size;
  
  let str2 = "Total colors => " + legendArray.length;
  let str3 = "Total pixels => " + imgWidth * imgHeight;
  fill(0);
  text(str2, canvasWidth + 35, canvasHeight + resizer - 80);
  text(str3, canvasWidth + 35, canvasHeight + resizer - 40);
  
  DrawLettersOnImage();
  
  console.log("Legend drawn !!!");
}

function DrawLettersOnImage(){
  
  for(var i = size / 2; i <= canvasHeight  + resizer; i += size){
      for(var j = size / 2; j <= canvasWidth; j += size){
        
        pixelColor = get(j, i);
        let color1 = new Color(null,null,pixelColor[0], pixelColor[1], pixelColor[2]);
        
        for(let k = 0; k < legendArray.length; k++){
        let color2 = new Color(null, null, legendArray[k].r, legendArray[k].g, legendArray[k].b);
          
            var bright = ((0.3 * color2.r) + (0.59 * color2.g) + (0.11 * color2.b));

        textSize(size / 2);
          textAlign(CENTER);
        
        
        if(colorEquals(color1 , color2)){
          
          if(bright < 50){
            noStroke();
            fill(255);
            text(legendArray[k].letter, j, i + 15);
            }
          else {
            noStroke();
            fill(0);
            text(legendArray[k].letter, j, i);
          }
          }
        }
      }
    }
  
  console.log("Letters written !!!")
}