
function setup() {
  createCanvas(400, 400);
  img2=loadImage('2.jpg');
}

function draw() {
  
  background(210,250,230);
  console.log("x: " + mouseX + ", y: " + mouseY);
 
fill(0,0,0);
beginShape();
  vertex(100,350);
  vertex(120,125);
  vertex(280,125);
  vertex(300,352);
  endShape(close);
  //back hair
  
fill(255,255,255);
  rect(160, 280, 80, 100);
  //neck
  
fill(100,125,230)
rect(90,330,230,100,40,40);
  //cloth
line(width/2,330,width/2,400);
  fill(200,230,240);
  triangle(190, 360, width/2, 330, 210, 360);
  
fill (255,255,220);
  ellipse(width/2, height/2, 160,200);
  //face
  
fill(255,210,0);
  ellipse(170, 176, 30, 10);
  ellipse(230, 176, 30, 10);
  //eyes
  
fill(210,230,240); 
  circle(width/2, height/2+20, 12);
  //nose
  
fill(0,0,0);
  arc(width/2, 180-25, 170, 180,PI,0,CHORD);
  //bangs

noFill();
strokeWeight(1);
beginShape();
vertex(180, 250);
quadraticVertex(200, 270, 220, 250);
endShape();
  //mouth
  
fill(255,255,255);
  push();
noStroke();
  let x1 = map(mouseX, 0, width, 160, 179, true);
  ellipse(x1, 175, 10, 8);
  let x2 = map(mouseX, 0, width, 220, 239,true);
  ellipse(x2, 175, 10, 8);
  pop();
  //motion
  
  push();
  translate(320,100);
  rotate(frameCount*PI/64);
  image(img2,-25,-25,50,50);
  
  pop();  

}