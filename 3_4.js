let x = 60;
let b = -40;
let cadetX;
let X;
let y;
let speed = 1.8;
let sizeX = 30;
let ellipseX;
let ellipseY;

function setup() {
  createCanvas(400, 400);
  cadetX = 100;
  X = random(width);
  y = random(-100, -50);
}

function draw() {
  background(35);
  cadet(cadetX);
  if (ellipseY < height) {
    fill("red");
    ellipse(ellipseX, ellipseY, sizeX);
    ellipseY += speed;
  }
}

function cadet(X) {
  push();
  translate(X, 0);
  fill("cadetblue");
  if (mouseIsPressed === true) fill("cyan");
  circle(100, 370, x);
  circle(100, 335, x - 15);
  fill("black");
  circle(100, 330, x - 40);
  fill("white");
  circle(105, 323, x - 55);
  strokeWeight(1.2);
  line(69, 380, 130, 380);
  line(69, 360, 130, 360);
  line(69, 370, 130, 370);
  pop();
}

function keyPressed() {
  if (keyCode == LEFT_ARROW) {
    cadetX -= 10;
  }
  if (keyCode == RIGHT_ARROW) {
    cadetX += 10;
  }
}

function mousePressed() {
  ellipseX = random(width);
  ellipseY = -sizeX;
}
