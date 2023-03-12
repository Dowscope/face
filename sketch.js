function setup() {
  createCanvas(400, 400);
  background(0)
  face = new Face(0,0)
}

function draw() {
  this.face.draw()
}

class Face {
  constructor(x, y){
    this.x = x;
    this.y = y;
  }
  
  draw(){
    noStroke()
    fill(0,0,255)
    ellipse(100,100,100,100)
    fill(225,85,25)
    ellipse(300,100,100,100)
    fill(255, 0,0)
    ellipse(200,200,50,50)
    this.drawSadMouth()
  }

  drawHappyMouth(){
    stroke(255, 204, 25)
    strokeWeight(4)
    line(100,300,300,300)
    line(75,225,100,300)
    line(300,300,325,225)
  }
  drawSadMouth(){
    stroke(255, 204, 25)
    strokeWeight(4)
    line(100,300,300,300)
    line(75,350,100,300)
    line(300,300,325,350)
  }
}
