function Ball(x, y, BallImage) {
  this.x = x;
  this.y = y;
  this.xdir = 0;
  this.ydir = 3;

  this.display = function() {
    if (this.x <= 10 || this.x >= width-10) this.xdir *= -1;
    if (this.y <= 10) this.ydir *= -1;
    this.x += this.xdir + this.xdir;
    this.y += this.ydir + this.ydir;
    stroke(150, 0, 0);
    fill(150, 0, 0);
    //ellipse(this.x, this.y, 20);
    BallImage.resize(24,24)
    image(BallImage,this.x,this.y)
  }

  this.bounce = function() {
    if (this.x >= bar.x - 50 && this.x <= bar.x + 50 && this.y > height - 30) {
      this.ydir *= -1;
      if (keyIsPressed) {
        if (keyCode === LEFT_ARROW)
          ball.xdir -= 1;
        else if (keyCode === RIGHT_ARROW)
          ball.xdir += 1;
      }
    }
  }

}