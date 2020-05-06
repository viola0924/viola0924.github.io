const Y_AXIS = 1;
const X_AXIS = 2;
let b1, b2;
let rain_x=50;
let rain_x2=30;
let rain_y=0;
let rain_y2=50;
let cx1,cx2,cx3;
let c2x1,c2x2,c2x3;
let cy1,cy2,cy3;
let c2y1,c2y2,c2y3;

let xspacing = 5; 
let w; 
let theta = 0.0; 
let amplitude = 75.0; 
let period = 500.0; 
let dx; 
let yvalues; 
var r, g, b;
let  Sx=60;


function setup() {
  createCanvas(800, 400);
  
  b1 = color(255);
  b2 = color(0, 102, 153);
  
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));
  
  r=220;
  g=200;
  b=220;
  
  cx1=200;
  cx2=185;
  cx3=220;
  
  c2x1=650;
  c2x2=620;
  c2x3=670;
  
  cy1=cy3=c2y1=c2y3=90;
  cy2=c2y2=100;
}

function draw() {
  console.log(mouseX,mouseY);
  setGradient(0, 0, 800, 400, b1, b2, Y_AXIS);
  drawRain();
  drawCloud();
  calcWave();
  renderWave();
  drawShip();
}

function setGradient(x, y, w, h, b1, b2, axis) {
 
  noFill();
  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let b = lerpColor(b1, b2, inter);
      stroke(b);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let b = lerpColor(b1, b2, inter);
      stroke(b);
      line(i, y, i, y + h);
    }
  }
}

function drawRain(){
  strokeWeight(0.5);
    rain_x-=1;
    rain_x2-=1;
    rain_y += 1;
    rain_y2 +=1;
    if(rain_y>=100){
        rain_y=0;  
    }
    if(rain_y2>=150){
      rain_y2=50
    }
    if(rain_x<=-50){
      rain_x=50;
    }
    if(rain_x2<=-70){
      rain_x2=30;
    }
  for (let a=0; a<=width;a+=80){
  
  line(rain_x+a,rain_y,rain_x2+a,rain_y2);
  line(rain_x/2+a,rain_y+50,rain_x2/2+a,rain_y2+50);
  line(rain_x/2+a,rain_y/2,rain_x2/2+a,rain_y2/2);
  }
  
  
}

function drawCloud(){

  noStroke();
  fill(r,g,b);
  ellipse(cx1,cy1,60);
  ellipse(cx2,cy2,40);
  ellipse(cx3,cy3,45);
  
  ellipse(c2x1,c2y1,60);
  ellipse(c2x2,c2y2,40);
  ellipse(c2x3,c2y3,40);
}

function mousePressed(){
  r=random(256);
  g=random(256);
  b=random(256); 
  cx1+=10;
  cx2+=10;
  cx3+=10;
  c2x1+=10;
  c2x2+=10;
  c2x3+=10;
  if(cx1&&cx2&&cx3&&c2x1&&c2x2&&c2x3>(width+100)){
    cx1&&cx2&&cx3&&c2x1&&c2x2&&c2x3==false;
     }
}




function calcWave() {

  theta += 0.02;

  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave() {
  noStroke();
  fill(235,225,235,100);

  for (let x = 0; x < yvalues.length; x++) {
    ellipse(x * xspacing, height / 2 + yvalues[x]+130, 15, 15);
  }
  for(let x = 0; x < yvalues.length; x++) {
   ellipse(x * xspacing/1.8, height / 1.5 + yvalues[x]+100, 12, 10);
  }
  
}

function drawShip(){
 
  stroke(0);
  fill(140,80,180,200);
  beginShape();
  vertex(Sx,250);
  vertex(Sx+30,250);
  vertex(Sx+50,200);
  vertex(Sx+70,250);
  vertex(Sx+100,250);
  vertex(Sx+70,250+20);
  vertex(Sx+40,250+20);
  vertex(Sx,250);
  endShape();
    if(keyIsPressed){

   	if(key=='a'){
      Sx-=10;
    }
    if(key=='d'){
      Sx+=10;
    }
      if (Sx>=width||Sx<=-200){
        Sx=60;
  }
}
}
function keyPressed(){

 	if(key=='z'){
   Sx-=10;
  }
    if(key=='c'){
   Sx+=10;
  }
  if (Sx>=width||Sx<=-200){
        Sx=60;
  }
}
