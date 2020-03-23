let i=0.1
function setup() {
  frameRate(10);
  createCanvas(400, 400);
  img=loadImage("trump-2020.png");
  img1=loadImage("2.jfif");
}

function draw() {
  background(255);
    textSize(25); 
    image(img1,0,0,400,400);
  fill(255,0,0);
    text("Make America Great Again", mouseX, mouseY);
   if (mouseIsPressed) 
   {scale(i); i+=0.1
  image(img,0,0,img.width/3,img.height/3);
    text("2020!Again!",25,50);
  if (i>2.5){ 
        i=0.1
    }
  }
}
