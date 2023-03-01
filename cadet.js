function setup() {
  createCanvas(400, 400);
}
// This is my character "cadet"
//The story is that he is lost in space, and has to catch enough fuel to get back home. 
 let x=60
function draw() {
  background(35);
  cadet();
  //noStroke();
}
function cadet(z,y,size){ 
  fill("cadetblue")
  circle(100,370,x)
  circle(100,335,x-15)
  fill("black")
  circle(100,330,x-40)
   fill("white")
  circle(105,323,x-55)
  strokeWeight (1.2)
  line(69, 380, 130, 380);
line(69, 360, 130, 360);
  line(69, 370, 130, 370);
}
