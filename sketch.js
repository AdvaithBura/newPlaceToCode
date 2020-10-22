var r1;
var box;
function setup() {
  createCanvas(800,400);
  r1 = createSprite(250, 200, 50, 50);
  r1.shapeColor = "red";

  box = createSprite(600,250,100,100);
  box.shapeColor = "pink";
}

function draw() {
  background(0,0,255); 
  box.x = mouseX;
  // algorithm

  if (r1.x - box.x < r1.width/2 + box.width/2
    && box.x - r1.x < r1.width/2 + box.width/2){
    r1.shapeColor = "green";
    box.shapeColor = "green";
  }
  else{
    r1.shapeColor = "red";
    box.shapeColor = "pink";
  }
  drawSprites();
}