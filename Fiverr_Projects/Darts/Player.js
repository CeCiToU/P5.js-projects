class Player {
  constructor(points){
    this.points = points;
  }
  
  AddPoints(pts){
    this.points += pts;
  }
  
  SubtractPoints(pts){
    this.points -= pts;
  }
}