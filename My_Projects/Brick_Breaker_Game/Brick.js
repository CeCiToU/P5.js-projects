function Brick(x, y, BrickImage) {
  this.x = x;
  this.y = y;

  this.display = function() {
    stroke(0);
    fill(157,253,40);
    imageMode(CENTER)
    BrickImage.resize(50,25);
    image(BrickImage,this.x + 25, this.y + 14);
    //rect(this.x, this.y, 50, 25);
  }

  this.break = function() {
    if (ball.x >= this.x && ball.x <= this.x + 50 && ball.y < this.y + 25 + 10)
      return 1;
  }

}