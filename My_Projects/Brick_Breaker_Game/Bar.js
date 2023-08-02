function Bar(x,BarImage) {
  this.x = x;

  this.display = function() {
    stroke(0, 0, 150);
    fill(0, 255, 255);
    imageMode(CENTER);
    BarImage.resize(100,20)
    //rect(this.x - 50, height - 20, 100, 20);
    image(BarImage,this.x,height - 10)
  }
}