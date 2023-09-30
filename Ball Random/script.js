
let angle = 0.0;
let segundos = 0;
//------------------------------
let  angulo = 0.0;
 function setup() {
  createCanvas(300,300) 

  background(204)
  frameRate(20)
  }
//------------------------------

function draw() {
translate(random(0,300), random(0,300));
  rotate(angulo)
  fill(255,random(0,255),random(0,255))
  //rect(-15,-15,30,30);
  ellipse(0,0,10,10)
  angulo += 0.1;

  



 }

  

