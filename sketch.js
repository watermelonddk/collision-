var fixedrectangle;
var movingrectangle;

function setup() {
  createCanvas(1200,800);
  fixedrectangle = createSprite(200,200,50,80);
  fixedrectangle.shapeColor="black";
  fixedrectangle.debug=true;

  movingrectangle = createSprite(400,200,80,30);
  movingrectangle.shapeColor="black";
  movingrectangle.debug=true;
}
function draw() {
  background("lightblue"); 
  
  movingrectangle.y=mouseY;
  movingrectangle.x=mouseX;

  if(movingrectangle.x-fixedrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 && 
    fixedrectangle.x-movingrectangle.x<fixedrectangle.width/2+movingrectangle.width/2 &&
    movingrectangle.y-fixedrectangle.y<fixedrectangle.width/2+movingrectangle.width/2 &&
    fixedrectangle.y-movingrectangle.y<fixedrectangle.width/2+movingrectangle.width/2){

    movingrectangle.shapeColor="blue";
    fixedrectangle.shapeColor="blue"; 
  }
  else {
    movingrectangle.shapeColor="black";
    fixedrectangle.shapeColor="black";
  }
  drawSprites();
}
