function Snake() {
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.total = 0;
  this.tail = [];
  this.allTimeBest = 0;
  
  this.update = function () {
    if (this.total == this.tail.length) {
      for (let i = 0; i < this.tail.length - 1; i++) {
        this.tail[i] = this.tail[i + 1];
      }
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);

    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;

    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);
  };

  this.death = function () {
    for (let i = 0; i < this.tail.length; i++) {
      let d = dist(this.x, this.y, this.tail[i].x, this.tail[i].y);
      if (d < 1 && this.x <= width + scl && this.x >= 0 && this.y <= height && this.y >= 0){
        return true;
      }
    }
  };

  this.show = function () {
    fill(54,226,12);
    strokeWeight(4);
    for (let i = 0; i < this.total; i++) {
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl);
  };

  this.dir = function (x, y) {
    this.xspeed = x;
    this.yspeed = y;
  };

  this.eat = function (pos) {
    var d = dist(this.x, this.y, pos.x, pos.y);
    if (d < 1) {
      this.total++;
      return true;
    } else {
      return false;
    }
  };

  this.move = function () {
    if (keyCode === UP_ARROW) {
      s.dir(0, -1);
    } else if (keyCode === DOWN_ARROW) {
      s.dir(0, 1);
    } else if (keyCode === LEFT_ARROW) {
      s.dir(-1, 0);
    } else if (keyCode === RIGHT_ARROW) {
      s.dir(1, 0);
    }
  }
  
  
}
