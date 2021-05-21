var garima,syna;

function setup() {
  createCanvas(500,500);

  garima=createSprite(400, 200, 50, 50);
  garima.shapeColor="green";
  garima.debug=true;
  
  syna=createSprite(250,250,100,100);
  syna.shapeColor="green";
  syna.debug=true;
}

function draw() {
  background("blue");

  garima.y=mouseY
  garima.x=mouseX;

 touching(); 

  drawSprites();
}

function touching(){
  if(garima.x-syna.x<garima.width/2+syna.width/2 &&
    syna.x-garima.x<syna.width/2+garima.width/2 && 
    syna.y-garima.y<syna.height/2+garima.height/2 &&
    garima.y-syna.y<garima.height/2+syna.height/2){
     garima.shapeColor="red";
     syna.shapeColor="red";
  }
  else{
    garima.shapeColor="green";
    syna.shapeColor="green"; 
  }
} 